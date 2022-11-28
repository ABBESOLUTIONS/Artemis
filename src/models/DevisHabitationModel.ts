export interface DevisHabitationModel {
    id_client:string,
    Nom:string,
    Prenom : string,
    Adresse:string,
    Num_Client:string | null ,
    Etage: string,
    Nbre_Etages_Immeuble: string,
    Telephone_Fix:string,
    Telephone_Mobile:string,
    Email:string,
    Situation_Falilial:string,
    Nombre_Enfants:string,
    Profession:string,
    Date_Naissance:string,
    Adresse_Bien:string,
    Utilisation_Residence:string,
    Statut:string,
    Surface_Total:string,
    Nbre_Pieces_Principal:string,
    Age_Du_Bien:string,
    Engins_Moteur:string
    Plafond_Valeur_Mobiler:string,
    Objet_De_Valeur:string,
    Realisation_Compagnie:string,
    Mot_Realisation:string,
    Nom_Prenom_Naiss_Enfant:string,
    Animaux:string,
    Carnet_de_Vaccination:string,
    Tatouages:string,
    Installation_Exterieures:Array<string>
    Autres_Installation:string,
    Granties_Souhaitées:Array<string>,
    Options:Array<string>,
    Autres_Options:string,
    Modes_Paiement:Array<string>,
}