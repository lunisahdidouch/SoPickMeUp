import { I18n } from 'i18n-js';
import { getLocales } from 'expo-localization';


const i18n = new I18n({
  en: { 
        tab1: 'My carpools', tab2: "All carpools", tab3: "Ride along", carpoolApplication: "Carpool application", 
        createCarpool: "Create carpool", editCarpool: "Edit carpool", carpoolDetails: "Carpool details", 
        changeLanguage: "Change language", sendFeedback: "sendFeedback", 
        chosenCarpool: "Chosen carpool", cancelApplication: "Cancel application", drawerItem1: "Language", drawerItem2:"Feedback", 
        drawerItem3:"Log out", overview: "Overview", availableSeats: "Available seats", driver: "Driver", passengers: "passengers", 
        comment: "Comment", apply: "Apply", edit: "Edit", delete: "Delete", cancel: "Cancel", startLocation: "Start location", 
        endLocation: "Destination", date: "Date", time: "Time",nameVisibility: "Name visibility", 
        rideType: "Ride type", rideTypeOption1: "One way", rideTypeOption2: "Round trip", nameVisibilityOption1: "Anonymous", 
        nameVisibilityOption2: "Visible", carpoolEdited: 'Carpool has been edited', carpoolDeleted: 'Carpool has been deleted', 
        applicationCanceled: 'Application has been canceled', carpoolCreated: 'Carpool has been created', username: "User name", 
        password: "Password", login: "Login", feedback: "Feedback", send: "Send", freeSeats: 'Open seats', createCarpoolHeader: 'Create a carpool as the driver',
        anonymous: 'Anonymous', noComment: 'No comment', nameIsVisible: 'Name is visible', nameIsNotVisible: 'Name is not hidden',
      },

  nl: { 
        tab1: 'Mijn carpools', tab2: "Alle carpools", tab3: "Meerijden", carpoolApplication: "Carpool aanmelding", 
        createCarpool: "Carpool aanmaken", carpoolDetails: "Carpool details", 
        chosenCarpool: "Gekozen carpool", changeLanguage: "Taal veranderen", sendFeedback: "Verstuur feedback", 
        editCarpool: "Carpool aanpassen", cancelApplication: "Carpool afmelden", drawerItem1: "Taal", drawerItem2:"Feedback", 
        drawerItem3:"Uitloggen", overview: "Overzicht", availableSeats: "Beschikbare plaatsen", passengers: "passagiers", driver: "Chauffeur", 
        comment: "Opmerking", apply: "Aanmelden", edit: "Aanpassen", delete: "Verwijderen", cancel: "Afmelden", 
        startLocation: "Vertrek plaats", endLocation: "Bestemming", date: "Datum", 
        time: "Tijd", nameVisibility: "Naam zichtbaarheid", rideType: "Rit type", rideTypeOption1: "Heen", 
        rideTypeOption2: "Heen en terug", nameVisibilityOption1: "Anoniem", nameVisibilityOption2: "Zichtbaar",
        carpoolEdited: 'Carpool is aangepast', carpoolDeleted: 'Carpool is verwijderd', applicationCanceled: 'Aanmelding is geannuleerd', 
        carpoolCreated: 'Carpool is aangemaakt', username: "Gebruikersnaam", password: "Wachtwoord", login: "Inloggen", feedback: "Feedback", 
        send: "Versturen", freeSeats: 'Vrije plaatsen', createCarpoolHeader: 'Carpool aanmaken als bestuurder',
        anonymous: 'Anoniem', noComment: 'Geen opmerking', nameIsVisible: 'Naam is zichtbaar', nameIsNotVisible: 'Naam is niet zichtbaar',
      },
});

i18n.locale = getLocales()[0].languageCode;

console.log(i18n.t('tab1'));

export default i18n;