import { initializeApp, FirebaseApp, FirebaseOptions } from "firebase/app";
import { getFirestore, Firestore, collection, addDoc, doc, getDoc, DocumentReference } from "firebase/firestore";
import type { Deck } from "../core/types";

let app: FirebaseApp | undefined;
let db: Firestore | undefined;

/**
 * Initialize Firebase with the provided configuration.
 * @param config Firebase configuration object
 */
export const initFirebase = (config: FirebaseOptions): FirebaseApp => {
    if (!app) {
        app = initializeApp(config);
        db = getFirestore(app);
    }
    return app;
};

/**
 * Save a deck (presentation) to Firestore.
 * @param deck The deck object to save
 * @returns The ID of the saved deck
 */
export const saveDeck = async (deck: Deck): Promise<string> => {
    if (!db) {
        throw new Error("Firebase not initialized. Call initFirebase first.");
    }

    try {
        // We only save the necessary data
        const dataToSave = {
            meta: deck.meta || {},
            slides: deck.slides || [],
            savedAt: new Date().toISOString(),
            version: '1.0' // Schema version
        };

        const docRef: DocumentReference = await addDoc(collection(db, "decks"), dataToSave);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
};

/**
 * Retrieve a deck (presentation) from Firestore by ID.
 * @param id The ID of the deck to retrieve
 * @returns The Deck object or null if not found
 */
export const getDeck = async (id: string): Promise<Deck | null> => {
    if (!db) {
        throw new Error("Firebase not initialized. Call initFirebase first.");
    }

    try {
        const docRef = doc(db, "decks", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            // Map back to Deck interface
            return {
                meta: data.meta,
                slides: data.slides
            } as Deck;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (e) {
        console.error("Error getting document: ", e);
        throw e;
    }
};
