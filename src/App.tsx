import { useEffect, useMemo, useState } from 'react';
import {
  Home,
  GraduationCap,
  PawPrint,
  Crown,
  Lock,
  CheckCircle2,
  Clock3,
  Sparkles,
  Trophy,
  Menu,
  X,
  Dog,
  BookOpen,
  AlertTriangle,
  Target,
  Star,
  Search,
  Flame,
  Heart,
  ListChecks,
  Lightbulb,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

type Lesson = {
  id: string;
  free?: boolean;
  category: string;
  title: string;
  level: string;
  duration: string;
  goal: string;
  intro: string;
  steps: string[];
  mistakes: string[];
  homework: string;
  why?: string;
  before?: string[];
  progress?: string[];
  success?: string[];
  troubleshooting?: string[];
};

const baseLessons: Lesson[] = [
  {
    {
      id: "free-01",
      free: true,
      category: "Bases essentielles",
      title: "Créer une routine d’éducation en 5 minutes",
      level: "Débutant",
      duration: "5 min",
      goal: "Installer une petite routine quotidienne pour apprendre sans fatiguer ton bouledogue.",
      intro: "Le bouledogue français apprend mieux avec des séances courtes, régulières et positives. Une routine de 5 minutes est plus efficace qu’une longue séance faite une fois de temps en temps.",
      why: "Une routine claire rassure ton chien et rend l’apprentissage plus facile. Il comprend qu’à certains moments de la journée, on travaille calmement, on réussit quelque chose, puis on passe à autre chose. C’est idéal pour créer de bonnes habitudes sans pression.",
      before: [
        "Choisis toujours le même moment de la journée au début.",
        "Prépare 5 à 8 petites récompenses.",
        "Éloigne les distractions : télévision, enfants qui courent, autres animaux.",
        "Prévois un seul exercice par séance.",
        "Arrête avant que ton chien se lasse."
      ],
      progress: [
        "Jour 1 : fais une séance de 3 minutes seulement.",
        "Jour 2 : répète le même exercice au même moment.",
        "Jour 3 : augmente à 5 minutes si ton chien reste motivé.",
        "Jour 4 : ajoute une petite difficulté, comme une seconde d’attente.",
        "Jour 5 et plus : garde cette routine comme un rendez-vous quotidien."
      ],
      steps: [
        "Choisis un exercice simple : assis, rappel, panier ou regard.",
        "Prépare les récompenses avant d’appeler ton chien.",
        "Fais 3 à 5 répétitions maximum.",
        "Récompense rapidement chaque réussite.",
        "Termine par une réussite facile."
      ],
      success: [
        "Ton chien vient plus facilement quand tu l’appelles pour travailler.",
        "Il reste concentré quelques minutes.",
        "Il réussit l’exercice sans excitation excessive.",
        "Tu sens que la séance devient plus fluide.",
        "Il garde une attitude positive après l’exercice."
      ],
      mistakes: [
        "Faire une séance trop longue.",
        "Changer d’exercice toutes les 30 secondes.",
        "Continuer alors que le chien décroche.",
        "S’énerver s’il ne comprend pas.",
        "Vouloir tout corriger en une seule fois."
      ],
      troubleshooting: [
        "S’il part, réduis la durée de la séance.",
        "S’il saute ou aboie, commence après une petite balade.",
        "S’il ignore les récompenses, teste une friandise plus motivante.",
        "S’il est trop excité, fais l’exercice dans un endroit plus calme.",
        "S’il échoue plusieurs fois, reviens à une étape plus simple."
      ],
      homework: "Pendant 5 jours, fais une séance de 5 minutes maximum avec le même exercice."
    },
    {
      id: "free-02",
      free: true,
      category: "Bases essentielles",
      title: "Apprendre le assis sans forcer",
      level: "Débutant",
      duration: "5 min",
      goal: "Obtenir un assis naturel sans appuyer sur le dos du chien.",
      intro: "Le assis est l’un des premiers exercices utiles au quotidien. Il peut servir avant la gamelle, avant de sortir, avant une caresse ou pour demander un moment de calme.",
      why: "Apprendre le assis sans contrainte permet à ton bouledogue de comprendre par lui-même ce qui est attendu. Il devient acteur de l’exercice au lieu de subir une manipulation physique.",
      before: [
        "Prépare une friandise très odorante.",
        "Place-toi devant ton chien dans un endroit calme.",
        "Évite de travailler s’il est surexcité.",
        "Garde une voix douce.",
        "Ne touche pas son dos pour le faire s’asseoir."
      ],
      progress: [
        "Étape 1 : utilise la friandise comme guide.",
        "Étape 2 : dis “assis” au moment où il pose les fesses.",
        "Étape 3 : dis “assis” juste avant le geste.",
        "Étape 4 : réduis progressivement le geste de la main.",
        "Étape 5 : demande le assis dans des situations simples du quotidien."
      ],
      steps: [
        "Tiens une friandise devant son nez.",
        "Remonte lentement la friandise vers le haut de sa tête.",
        "Dès que ses fesses touchent le sol, dis “oui”.",
        "Donne immédiatement la récompense.",
        "Répète 5 fois maximum puis fais une pause."
      ],
      success: [
        "Ton chien s’assoit sans que tu le touches.",
        "Il regarde la friandise puis propose le mouvement.",
        "Il comprend le mot “assis” plus rapidement.",
        "Il reste calme pendant l’exercice.",
        "Tu peux l’utiliser avant la gamelle ou la porte."
      ],
      mistakes: [
        "Appuyer sur son dos.",
        "Répéter “assis” dix fois.",
        "Lever la friandise trop haut et le faire sauter.",
        "Travailler trop longtemps.",
        "Récompenser trop tard."
      ],
      troubleshooting: [
        "S’il saute, baisse la friandise près de son nez.",
        "S’il recule, travaille près d’un mur ou dans un coin calme.",
        "S’il ne s’assoit pas, attends un mouvement naturel et récompense.",
        "S’il se lasse, arrête et reprends plus tard.",
        "S’il se couche directement, récompense d’abord les débuts de mouvement."
      ],
      homework: "Demande un assis avant la gamelle pendant 3 jours, sans insister plus de 10 secondes."
    },
    {
      id: "free-03",
      free: true,
      category: "Bases essentielles",
      title: "Le rappel à la maison",
      level: "Débutant",
      duration: "6 min",
      goal: "Créer un rappel joyeux dans un environnement facile.",
      intro: "Avant de demander à ton bouledogue de revenir dehors, il doit comprendre le rappel dans un lieu simple. La maison est parfaite pour créer une première association positive.",
      why: "Le rappel est un exercice de sécurité. Plus ton chien associe le fait de revenir à quelque chose d’agréable, plus il aura envie de répondre quand tu l’appelles.",
      before: [
        "Choisis un mot unique : “viens”, “ici” ou “au pied”.",
        "Prépare une récompense spéciale.",
        "Travaille quand ton chien n’est pas occupé à dormir ou manger.",
        "Place-toi à courte distance.",
        "Ne l’appelle jamais pour le gronder."
      ],
      progress: [
        "Jour 1 : rappel à 1 ou 2 mètres.",
        "Jour 2 : rappel depuis une autre pièce.",
        "Jour 3 : rappel quand il est légèrement distrait.",
        "Jour 4 : ajoute un petit jeu après le retour.",
        "Jour 5 : commence à tester dans un couloir ou jardin sécurisé."
      ],
      steps: [
        "Place-toi à quelques mètres de ton chien.",
        "Dis son prénom puis ton mot de rappel une seule fois.",
        "Recule légèrement pour lui donner envie de venir.",
        "Récompense fortement quand il arrive.",
        "Laisse-le repartir après la récompense."
      ],
      success: [
        "Ton chien vient avec plus d’enthousiasme.",
        "Il répond après un seul appel.",
        "Il revient même si tu n’as pas la friandise visible.",
        "Il ne fuit pas après être revenu.",
        "Il associe le rappel à un moment positif."
      ],
      mistakes: [
        "L’appeler pour le punir.",
        "Répéter le mot de rappel en boucle.",
        "Le rattacher ou l’enfermer à chaque rappel.",
        "Être énervé quand il arrive lentement.",
        "Tester trop vite dans un lieu difficile."
      ],
      troubleshooting: [
        "S’il ne vient pas, réduis la distance.",
        "S’il te regarde sans bouger, recule en l’encourageant.",
        "S’il vient lentement, récompense quand même.",
        "S’il ignore l’appel, choisis un meilleur moment.",
        "S’il fuit, ne cours pas après lui : rends-toi plus intéressant."
      ],
      homework: "Fais 5 rappels faciles par jour dans la maison pendant 4 jours."
    },
    {
      id: "free-04",
      free: true,
      category: "Bases essentielles",
      title: "Le calme avant la gamelle",
      level: "Débutant",
      duration: "4 min",
      goal: "Apprendre à patienter quelques secondes avant de manger.",
      intro: "La gamelle est un moment très motivant. C’est donc une occasion parfaite pour apprendre à ton bouledogue que le calme permet d’obtenir ce qu’il veut.",
      why: "Cet exercice apprend au chien à se contrôler dans une situation excitante. Ce petit apprentissage peut ensuite aider pour la porte, les invités ou les friandises.",
      before: [
        "Prépare la gamelle comme d’habitude.",
        "Garde-la en hauteur au départ.",
        "Ne cherche pas un calme parfait le premier jour.",
        "Travaille dans le silence autant que possible.",
        "Garde une attitude posée."
      ],
      progress: [
        "Jour 1 : attendre une seconde de calme.",
        "Jour 2 : attendre deux secondes.",
        "Jour 3 : demander quatre pattes au sol.",
        "Jour 4 : ajouter un assis si ton chien le connaît.",
        "Jour 5 : poser la gamelle uniquement après le signal de calme."
      ],
      steps: [
        "Tiens la gamelle hors de portée.",
        "Attends un micro-calme : silence, regard ou pattes au sol.",
        "Descends doucement la gamelle.",
        "S’il saute, remonte-la sans parler fort.",
        "Dès qu’il se calme, pose la gamelle."
      ],
      success: [
        "Ton chien saute moins à l’heure du repas.",
        "Il comprend que le calme fait avancer la situation.",
        "Il attend quelques secondes sans aboyer.",
        "Il regarde davantage vers toi.",
        "Le repas devient plus posé."
      ],
      mistakes: [
        "Crier quand il s’excite.",
        "Demander une attente trop longue dès le début.",
        "Poser la gamelle pendant qu’il saute.",
        "Faire durer l’exercice trop longtemps.",
        "Changer la règle d’un repas à l’autre."
      ],
      troubleshooting: [
        "S’il aboie, attends une micro-pause de silence.",
        "S’il saute beaucoup, garde la gamelle plus haut.",
        "S’il s’énerve, simplifie l’exercice.",
        "S’il ne tient pas l’attente, récompense une demi-seconde.",
        "S’il recule ou stress, rends l’exercice plus facile."
      ],
      homework: "Travaille cet exercice à chaque repas pendant une semaine."
    },
    {
      id: "free-05",
      free: true,
      category: "Bases essentielles",
      title: "Dire non sans braquer son bouledogue",
      level: "Débutant",
      duration: "7 min",
      goal: "Remplacer le conflit par une redirection claire.",
      intro: "Le bouledogue français peut vite se braquer si on insiste trop. Dire non ne suffit pas : il faut surtout lui montrer quoi faire à la place.",
      why: "Un chien comprend mieux une alternative qu’une interdiction seule. En redirigeant vers un comportement autorisé, tu évites le rapport de force et tu construis une règle plus claire.",
      before: [
        "Identifie le comportement que tu veux corriger.",
        "Prépare une alternative : jouet, panier, assis ou rappel.",
        "Range ce qui déclenche trop facilement la bêtise.",
        "Utilise toujours le même mot court.",
        "Reste neutre, sans crier."
      ],
      progress: [
        "Étape 1 : repérer les situations qui posent problème.",
        "Étape 2 : dire “stop” une seule fois.",
        "Étape 3 : proposer immédiatement une alternative.",
        "Étape 4 : récompenser l’alternative.",
        "Étape 5 : anticiper avant que la bêtise commence."
      ],
      steps: [
        "Repère le comportement gênant.",
        "Dis “stop” calmement une seule fois.",
        "Propose une action autorisée.",
        "Récompense dès qu’il choisit cette action.",
        "Répète la même stratégie plusieurs jours."
      ],
      success: [
        "Ton chien se redirige plus facilement.",
        "Il reste moins bloqué sur la bêtise.",
        "Tu cries moins.",
        "Les conflits diminuent.",
        "Il commence à proposer le bon comportement seul."
      ],
      mistakes: [
        "Répéter “non” en boucle.",
        "Courir après lui quand il vole un objet.",
        "Donner beaucoup d’attention au mauvais comportement.",
        "Changer de mot à chaque fois.",
        "Punir sans proposer d’alternative."
      ],
      troubleshooting: [
        "S’il garde l’objet, propose un échange plus intéressant.",
        "S’il recommence, vérifie que l’environnement n’est pas trop tentant.",
        "S’il s’excite, baisse ton énergie.",
        "S’il ne comprend pas, choisis une alternative plus simple.",
        "S’il insiste beaucoup, travaille d’abord en prévention."
      ],
      homework: "Choisis une seule bêtise fréquente et prépare une alternative avant qu’elle arrive."
    },
    {
      id: "free-06",
      free: true,
      category: "Bases essentielles",
      title: "Récompenser au bon moment",
      level: "Débutant",
      duration: "5 min",
      goal: "Comprendre le bon timing pour renforcer le comportement souhaité.",
      intro: "Le chien associe la récompense à ce qu’il faisait au moment exact où elle arrive. Un bon timing peut changer complètement la vitesse d’apprentissage.",
      why: "Si tu récompenses trop tard, ton bouledogue peut croire qu’il est récompensé pour autre chose. Le bon timing rend l’apprentissage beaucoup plus clair.",
      before: [
        "Choisis un comportement très simple.",
        "Prépare les friandises dans ta main ou ta poche.",
        "Décide d’un marqueur comme “oui”.",
        "Travaille dans un lieu calme.",
        "Observe précisément le moment de réussite."
      ],
      progress: [
        "Étape 1 : marquer un regard avec “oui”.",
        "Étape 2 : donner la récompense juste après.",
        "Étape 3 : répéter sur un assis ou un rappel.",
        "Étape 4 : utiliser le marqueur dans la vie quotidienne.",
        "Étape 5 : récompenser aussi les bons comportements spontanés."
      ],
      steps: [
        "Attends que ton chien fasse l’action souhaitée.",
        "Dis “oui” au moment précis de la réussite.",
        "Donne la récompense juste après.",
        "Répète plusieurs fois sur des actions faciles.",
        "Garde toujours le même mot de validation."
      ],
      success: [
        "Ton chien comprend plus vite ce qui rapporte.",
        "Il propose plus souvent les bons comportements.",
        "Tu as moins besoin de répéter.",
        "Les séances deviennent plus fluides.",
        "Il reste motivé pendant l’apprentissage."
      ],
      mistakes: [
        "Récompenser quand le chien est déjà passé à autre chose.",
        "Dire trop de mots avant la récompense.",
        "Récompenser un saut sans le vouloir.",
        "Oublier de marquer la réussite.",
        "Donner la friandise au hasard."
      ],
      troubleshooting: [
        "Si ton chien ne comprend pas, choisis une action plus visible.",
        "Si tu rates le timing, ralentis la séance.",
        "Si tu parles trop, garde uniquement le mot “oui”.",
        "Si le chien s’agite, attends un comportement plus calme.",
        "Si la friandise arrive trop tard, prépare-la mieux avant."
      ],
      homework: "Pendant une journée, dis “oui” et récompense dès que ton chien te regarde spontanément."
    },
    {
      id: "free-07",
      free: true,
      category: "Bases essentielles",
      title: "Apprendre à attendre à la porte",
      level: "Débutant",
      duration: "6 min",
      goal: "Éviter que ton bouledogue se précipite dehors.",
      intro: "La porte est un moment excitant et parfois dangereux. Apprendre à attendre quelques secondes permet de sortir plus calmement et en sécurité.",
      why: "Un chien qui fonce dès que la porte s’ouvre peut se mettre en danger. Cet exercice apprend le contrôle de soi dans une situation très concrète du quotidien.",
      before: [
        "Mets toujours la laisse avant l’exercice.",
        "Travaille d’abord sur une porte intérieure si besoin.",
        "Ne demande pas une longue attente au début.",
        "Garde la poignée en main pour refermer doucement.",
        "Utilise un mot de libération comme “ok”."
      ],
      progress: [
        "Jour 1 : ouvrir seulement de quelques centimètres.",
        "Jour 2 : attendre une seconde.",
        "Jour 3 : ouvrir un peu plus largement.",
        "Jour 4 : sortir seulement après le mot “ok”.",
        "Jour 5 : répéter sur une vraie sortie."
      ],
      steps: [
        "Mets la laisse à ton chien.",
        "Demande un petit calme ou un assis.",
        "Ouvre la porte très légèrement.",
        "S’il avance, referme doucement.",
        "S’il attend, dis “ok” et avance avec lui."
      ],
      success: [
        "Ton chien ne bondit plus immédiatement.",
        "Il regarde davantage vers toi.",
        "Il attend ton signal.",
        "La sortie démarre plus calmement.",
        "Tu te sens plus en sécurité."
      ],
      mistakes: [
        "Ouvrir grand la porte trop vite.",
        "Tirer brusquement sur la laisse.",
        "Demander 30 secondes d’attente dès le départ.",
        "Sortir pendant qu’il force le passage.",
        "Oublier le mot de libération."
      ],
      troubleshooting: [
        "S’il fonce, réduis l’ouverture de la porte.",
        "S’il aboie, attends une micro-pause de calme.",
        "S’il ne tient pas l’assis, demande seulement les pattes au sol.",
        "S’il est trop excité, fais l’exercice après une sortie plus calme.",
        "S’il recule ou stress, simplifie avec une porte intérieure."
      ],
      homework: "Travaille une seule sortie par jour en mode calme pendant une semaine."
    },
    {
      id: "free-08",
      free: true,
      category: "Bases essentielles",
      title: "Le panier comme zone positive",
      level: "Débutant",
      duration: "8 min",
      goal: "Faire du panier un endroit agréable et rassurant.",
      intro: "Le panier ne doit pas être associé à une punition. Pour qu’un chien y aille volontiers, il doit y trouver du confort, du calme et parfois de petites surprises.",
      why: "Un panier positif aide ton bouledogue à se poser, à mieux gérer l’excitation et à avoir un endroit à lui. C’est utile quand tu travailles, quand tu reçois ou quand il a besoin de repos.",
      before: [
        "Place le panier dans un endroit calme mais pas isolé.",
        "Ajoute une couverture confortable.",
        "Prépare quelques friandises.",
        "Ne force pas ton chien à y rester.",
        "N’utilise jamais le panier comme punition."
      ],
      progress: [
        "Étape 1 : déposer des friandises dans le panier.",
        "Étape 2 : féliciter quand il y va spontanément.",
        "Étape 3 : ajouter le mot “panier”.",
        "Étape 4 : récompenser quelques secondes de calme.",
        "Étape 5 : utiliser le panier dans la vie quotidienne."
      ],
      steps: [
        "Dépose une friandise dans le panier.",
        "Laisse ton chien y aller librement.",
        "Félicite calmement quand il entre dedans.",
        "Ajoute le mot “panier” au bon moment.",
        "Laisse-le ressortir au début sans le bloquer."
      ],
      success: [
        "Ton chien va plus souvent au panier seul.",
        "Il y reste quelques instants calmement.",
        "Il ne voit pas le panier comme une contrainte.",
        "Il accepte d’y aller quand tu le demandes.",
        "Il s’y repose plus facilement."
      ],
      mistakes: [
        "Envoyer le chien au panier pour le punir.",
        "Le forcer à rester trop longtemps.",
        "Placer le panier dans un lieu bruyant.",
        "Crier “panier” quand il est déjà excité.",
        "Ne jamais récompenser quand il y va seul."
      ],
      troubleshooting: [
        "S’il évite le panier, change son emplacement.",
        "S’il ressort immédiatement, récompense juste l’entrée au début.",
        "S’il gratte ou mordille, propose un objet calme.",
        "S’il refuse d’y aller, rends l’endroit plus confortable.",
        "S’il s’excite, travaille après une promenade."
      ],
      homework: "Dépose 3 petites surprises par jour dans son panier pendant une semaine."
    },
    {
      id: "free-09",
      free: true,
      category: "Bases essentielles",
      title: "Comprendre les signes de fatigue",
      level: "Tous niveaux",
      duration: "5 min",
      goal: "Savoir quand arrêter une séance avant que ton chien sature.",
      intro: "Un bouledogue fatigué peut donner l’impression d’être têtu alors qu’il n’est simplement plus disponible. Savoir lire les signes de fatigue évite beaucoup d’erreurs.",
      why: "Respecter la fatigue de ton chien protège sa motivation et sa santé. Chez le bouledogue français, il faut aussi être attentif à la chaleur, à la respiration et à l’effort.",
      before: [
        "Observe ton chien avant de commencer.",
        "Évite les heures chaudes.",
        "Prévois de l’eau.",
        "Travaille sur des séances courtes.",
        "Arrête au premier vrai signe de saturation."
      ],
      progress: [
        "Étape 1 : repérer les signes de fatigue dans la maison.",
        "Étape 2 : noter à quel moment ils apparaissent.",
        "Étape 3 : raccourcir les séances.",
        "Étape 4 : faire plus de pauses.",
        "Étape 5 : adapter les exercices selon la météo et l’énergie."
      ],
      steps: [
        "Observe sa respiration.",
        "Regarde s’il détourne la tête ou renifle partout.",
        "Note s’il prend les friandises plus lentement.",
        "Fais une pause eau et calme.",
        "Reprends plus tard avec un exercice plus facile."
      ],
      success: [
        "Tu arrêtes avant que ton chien décroche complètement.",
        "Les séances restent positives.",
        "Ton chien récupère plus vite.",
        "Tu distingues mieux fatigue et désobéissance.",
        "Il garde plus de motivation sur la durée."
      ],
      mistakes: [
        "Penser qu’il est têtu alors qu’il est fatigué.",
        "Travailler en pleine chaleur.",
        "Vouloir finir l’exercice à tout prix.",
        "Ignorer une respiration forte.",
        "Faire des séances trop physiques."
      ],
      troubleshooting: [
        "S’il halète beaucoup, stoppe immédiatement et mets-le au frais.",
        "S’il refuse les friandises, fais une pause.",
        "S’il s’éloigne, raccourcis les séances futures.",
        "S’il s’excite au lieu d’écouter, propose du calme.",
        "S’il fatigue très vite, demande conseil à un vétérinaire."
      ],
      homework: "Lors des prochaines séances, note le moment où ton chien commence à décrocher."
    },
    {
      id: "free-10",
      free: true,
      category: "Bases essentielles",
      title: "Choisir les bonnes récompenses",
      level: "Débutant",
      duration: "6 min",
      goal: "Trouver ce qui motive vraiment ton bouledogue selon la situation.",
      intro: "Tous les chiens ne sont pas motivés par les mêmes choses. Certains adorent la nourriture, d’autres préfèrent le jeu, la voix ou l’accès à une odeur intéressante.",
      why: "Une récompense adaptée rend l’apprentissage plus rapide et plus agréable. Dehors, une simple croquette peut ne pas suffire si ton chien est attiré par les odeurs, les chiens ou les passants.",
      before: [
        "Prépare trois types de récompenses différentes.",
        "Teste dans un endroit calme.",
        "Utilise de très petits morceaux.",
        "Garde les meilleures récompenses pour les exercices difficiles.",
        "Observe ce que ton chien choisit spontanément."
      ],
      progress: [
        "Étape 1 : tester les récompenses à la maison.",
        "Étape 2 : classer les récompenses de faible à forte valeur.",
        "Étape 3 : utiliser les plus fortes dehors.",
        "Étape 4 : varier pour éviter la lassitude.",
        "Étape 5 : remplacer parfois la nourriture par un jeu ou une liberté."
      ],
      steps: [
        "Présente trois récompenses différentes.",
        "Observe celle que ton chien choisit en premier.",
        "Teste ensuite pendant un exercice simple.",
        "Garde la meilleure pour le rappel ou les distractions.",
        "Varie régulièrement selon l’environnement."
      ],
      success: [
        "Ton chien reste plus concentré.",
        "Il répond mieux dehors.",
        "Il revient plus vite au rappel.",
        "Il montre plus d’enthousiasme pendant les séances.",
        "Tu sais quelle récompense utiliser selon la difficulté."
      ],
      mistakes: [
        "Utiliser une récompense trop faible dehors.",
        "Donner de gros morceaux.",
        "Penser qu’une caresse suffit toujours.",
        "Utiliser la même friandise pendant des semaines.",
        "Récompenser sans lien avec un comportement précis."
      ],
      troubleshooting: [
        "S’il ignore la friandise, teste plus appétent.",
        "S’il s’excite trop, choisis une récompense plus calme.",
        "S’il prend puis repart, travaille dans un lieu moins stimulant.",
        "S’il grossit facilement, réduis la taille des morceaux.",
        "S’il n’aime pas la nourriture dehors, utilise l’accès aux odeurs comme récompense."
      ],
      homework: "Fais un mini-test avec 3 récompenses différentes et classe-les de la moins motivante à la plus motivante."
    },

  ...[
    [
      {
        id: "premium-01",
        category: "Promenade sans tirer",
        title: "Comprendre pourquoi il tire en laisse",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Identifier la vraie cause du tirage pour choisir la bonne stratégie.",
        intro: "Un bouledogue ne tire pas pour dominer. Il tire souvent parce qu’il est excité, attiré par les odeurs, frustré par la laisse ou parce qu’il a appris que tirer permet d’avancer.",
        why: "Avant de corriger le tirage, il faut comprendre ce qui le déclenche. Un chien qui tire par excitation ne se travaille pas exactement comme un chien qui tire par peur ou par frustration.",
        before: [
          "Prévois une balade courte, sans objectif de distance.",
          "Utilise un harnais confortable.",
          "Prends des récompenses faciles à donner dehors.",
          "Observe sans corriger pendant quelques minutes.",
          "Choisis un trajet simple pour mieux analyser son comportement."
        ],
        progress: [
          "Balade 1 : observe les moments où la laisse se tend.",
          "Balade 2 : note les déclencheurs principaux.",
          "Balade 3 : récompense les moments de laisse détendue.",
          "Balade 4 : évite volontairement les zones trop difficiles.",
          "Balade 5 : commence à anticiper avant qu’il tire."
        ],
        steps: [
          "Observe quand il tire : début de balade, odeurs, chiens, humains ou retour maison.",
          "Note si la laisse est tendue tout le temps ou seulement par moments.",
          "Ralentis avant les zones difficiles.",
          "Récompense chaque moment où la laisse se détend.",
          "Choisis un seul déclencheur à travailler cette semaine."
        ],
        success: [
          "Tu identifies les moments précis où il tire.",
          "Tu comprends mieux ce qui l’excite ou le frustre.",
          "La laisse se détend plus souvent.",
          "Tu anticipes avant qu’il parte devant.",
          "Les balades deviennent moins conflictuelles."
        ],
        mistakes: [
          "Penser qu’un harnais règle tout seul le problème.",
          "Tirer plus fort que lui.",
          "Changer de méthode tous les jours.",
          "Le gronder sans lui montrer quoi faire.",
          "Travailler dans un lieu trop stimulant dès le départ."
        ],
        troubleshooting: [
          "S’il tire dès la sortie, commence par quelques secondes de calme devant la porte.",
          "S’il tire vers les odeurs, prévois des pauses reniflage autorisées.",
          "S’il tire vers les chiens, augmente la distance.",
          "S’il tire tout le temps, raccourcis la balade éducative.",
          "S’il sature, termine par une réussite facile."
        ],
        homework: "Pendant 3 balades, note les 3 moments où la laisse se tend le plus."
      },
      {
        id: "premium-02",
        category: "Promenade sans tirer",
        title: "Récompenser la laisse détendue",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Lui apprendre que marcher avec une laisse souple permet d’avancer.",
        intro: "Beaucoup de chiens tirent parce qu’ils ont appris que tirer les rapproche de ce qu’ils veulent. Cette leçon inverse la logique : la laisse détendue devient ce qui fait avancer.",
        why: "Si ton chien n’est jamais récompensé quand il marche bien, il ne peut pas deviner ce que tu attends. Récompenser la laisse détendue rend le bon comportement beaucoup plus clair.",
        before: [
          "Choisis une rue calme.",
          "Prépare de petites friandises.",
          "Garde la laisse assez courte pour rester en sécurité, mais pas tendue.",
          "Ne cherche pas une marche parfaite.",
          "Travaille seulement 5 à 10 minutes."
        ],
        progress: [
          "Jour 1 : récompense chaque seconde de laisse détendue.",
          "Jour 2 : récompense tous les 2 ou 3 pas calmes.",
          "Jour 3 : ajoute de petits changements de direction.",
          "Jour 4 : travaille dans une rue un peu plus vivante.",
          "Jour 5 : récompense moins souvent mais mieux."
        ],
        steps: [
          "Commence dans un endroit calme.",
          "Dès que la laisse forme un léger U, dis “oui”.",
          "Récompense près de ta jambe.",
          "Si la laisse se tend, arrête-toi calmement.",
          "Repars dès qu’elle se détend."
        ],
        success: [
          "La laisse reste souple plus longtemps.",
          "Ton chien revient plus souvent vers toi.",
          "Il comprend que tirer ne fait pas avancer.",
          "Les arrêts deviennent moins fréquents.",
          "Tu peux marcher plus calmement."
        ],
        mistakes: [
          "Attendre une marche parfaite pour récompenser.",
          "Donner la friandise trop loin de toi.",
          "Continuer à avancer quand il tire fort.",
          "Tirer en arrière pour le ramener.",
          "Travailler trop longtemps."
        ],
        troubleshooting: [
          "S’il tire immédiatement, commence dans un couloir ou un jardin.",
          "S’il saute sur la friandise, donne-la plus bas et plus calmement.",
          "S’il repart devant après la récompense, fais seulement 2 pas puis récompense.",
          "S’il ignore les friandises, choisis un lieu plus calme.",
          "S’il s’énerve, fais une pause reniflage."
        ],
        homework: "Fais 5 minutes de laisse détendue avant chaque vraie balade."
      },
      {
        id: "premium-03",
        category: "Promenade sans tirer",
        title: "Gérer les odeurs obsessionnelles",
        level: "Intermédiaire",
        duration: "12 min",
        goal: "Lui permettre de renifler sans transformer chaque poteau en bras de fer.",
        intro: "Renifler est un besoin naturel. Pour un bouledogue, les odeurs peuvent être plus fortes qu’une friandise. Le but n’est donc pas de les interdire, mais de les encadrer.",
        why: "Si tu empêches toutes les odeurs, la promenade devient frustrante. Si tu le laisses décider de tout, tu perds le contrôle. Cette leçon crée un équilibre entre liberté et cadre.",
        before: [
          "Choisis un trajet avec quelques zones d’odeurs.",
          "Prévois un mot d’autorisation.",
          "Prévois un mot pour repartir.",
          "Ne travaille pas quand ton chien est déjà surexcité.",
          "Accepte que renifler fasse partie de la balade."
        ],
        progress: [
          "Jour 1 : autorise quelques pauses reniflage libres.",
          "Jour 2 : ajoute le mot “va renifler”.",
          "Jour 3 : ajoute le mot “on y va”.",
          "Jour 4 : récompense chaque départ volontaire.",
          "Jour 5 : alterne marche et pauses odeurs."
        ],
        steps: [
          "Choisis un mot d’autorisation : “va renifler”.",
          "Laisse-le explorer quelques secondes.",
          "Dis “on y va” avec une voix calme.",
          "Récompense dès qu’il quitte l’odeur pour te suivre.",
          "Renvoie-le parfois renifler pour éviter la frustration."
        ],
        success: [
          "Il accepte de quitter une odeur plus facilement.",
          "Il comprend quand il peut renifler.",
          "Il se frustre moins.",
          "Tu reprends la marche sans tirer.",
          "La promenade devient plus équilibrée."
        ],
        mistakes: [
          "Interdire toutes les odeurs.",
          "Tirer sèchement sur la laisse.",
          "Ne pas récompenser quand il accepte de repartir.",
          "Attendre qu’il soit totalement bloqué sur l’odeur.",
          "Utiliser toujours le même poteau difficile pour commencer."
        ],
        troubleshooting: [
          "S’il ne repart pas, attends qu’il relève légèrement la tête.",
          "S’il résiste, propose une récompense plus forte.",
          "S’il tire vers toutes les odeurs, augmente les pauses autorisées.",
          "S’il s’énerve, raccourcis les temps de reniflage.",
          "S’il ignore “on y va”, retravaille à la maison avec un jouet ou une friandise."
        ],
        homework: "Sur une balade, autorise 5 zones de reniflage puis demande de repartir calmement."
      },
      {
        id: "premium-04",
        category: "Promenade sans tirer",
        title: "Croiser un chien calmement",
        level: "Avancé",
        duration: "12 min",
        goal: "Réduire l’excitation ou la tension lors des croisements avec d’autres chiens.",
        intro: "Les croisements sont difficiles parce qu’ils mélangent émotion, frustration et distance. Ton bouledogue peut vouloir aller voir, aboyer, tirer ou se figer.",
        why: "Un croisement réussi n’est pas forcément un chien parfaitement immobile. C’est un chien qui reste suffisamment disponible pour t’écouter et passer sans exploser.",
        before: [
          "Travaille à distance au début.",
          "Prévois des friandises très motivantes.",
          "Évite les rues trop étroites.",
          "Ne force jamais un face-à-face.",
          "Observe le langage corporel de ton chien."
        ],
        progress: [
          "Étape 1 : observer un chien de loin.",
          "Étape 2 : récompenser le regard vers toi.",
          "Étape 3 : passer en arc de cercle.",
          "Étape 4 : réduire légèrement la distance.",
          "Étape 5 : travailler des croisements plus réels."
        ],
        steps: [
          "Repère l’autre chien avant que ton bouledogue fixe trop.",
          "Augmente la distance si nécessaire.",
          "Dis son prénom et récompense le regard vers toi.",
          "Avance en arc de cercle plutôt qu’en face-à-face.",
          "Récompense après le croisement quand il redescend."
        ],
        success: [
          "Il fixe moins longtemps les autres chiens.",
          "Il reprend plus vite contact avec toi.",
          "Il aboie moins fort ou moins longtemps.",
          "Il accepte de passer à distance.",
          "Il récupère plus vite après le croisement."
        ],
        mistakes: [
          "Attendre qu’il aboie pour réagir.",
          "Forcer un face-à-face en laisse courte.",
          "Le gronder alors qu’il est déjà débordé.",
          "Le laisser tirer jusqu’à l’autre chien.",
          "Réduire la distance trop vite."
        ],
        troubleshooting: [
          "S’il explose, tu étais probablement trop près.",
          "S’il refuse les friandises, augmente la distance.",
          "S’il tire fort, fais demi-tour calmement.",
          "S’il se fige, laisse-lui plus d’espace.",
          "S’il progresse, garde plusieurs réussites faciles avant de compliquer."
        ],
        homework: "Travaille uniquement à distance confortable pendant une semaine."
      },
      {
        id: "premium-05",
        category: "Promenade sans tirer",
        title: "Le demi-tour magique",
        level: "Intermédiaire",
        duration: "8 min",
        goal: "Utiliser le changement de direction pour récupérer l’attention sans tirer.",
        intro: "Le demi-tour est un outil simple mais très utile. Il permet d’éviter un déclencheur, de récupérer l’attention et de rendre la balade moins automatique.",
        why: "Plutôt que de tirer ton chien en arrière, tu lui apprends à suivre ton mouvement. C’est plus doux, plus clair et souvent plus efficace.",
        before: [
          "Travaille d’abord dans un lieu calme.",
          "Garde une voix joyeuse.",
          "Prépare des récompenses.",
          "Ne fais pas de mouvement brusque.",
          "Utilise toujours le même mot."
        ],
        progress: [
          "Jour 1 : demi-tours sans distraction.",
          "Jour 2 : demi-tours avec une légère distraction.",
          "Jour 3 : demi-tours avant une odeur.",
          "Jour 4 : demi-tours avant un croisement difficile.",
          "Jour 5 : demi-tours intégrés dans la balade."
        ],
        steps: [
          "Avance lentement dans un endroit calme.",
          "Dis “demi-tour” avec une voix joyeuse.",
          "Tourne en invitant ton chien avec ton corps.",
          "Récompense dès qu’il revient vers toi.",
          "Utilise-le ensuite avant les déclencheurs."
        ],
        success: [
          "Ton chien te suit plus facilement.",
          "Tu récupères son attention sans tirer.",
          "Les changements de direction deviennent fluides.",
          "Il anticipe moins en tirant devant.",
          "Tu évites plus facilement les situations difficiles."
        ],
        mistakes: [
          "Faire demi-tour brutalement.",
          "L’utiliser seulement quand il tire déjà très fort.",
          "Oublier de récompenser le retour vers toi.",
          "Tourner trop vite.",
          "Dire le mot quand le chien est déjà hors contrôle."
        ],
        troubleshooting: [
          "S’il ne suit pas, commence avec une friandise près de toi.",
          "S’il tire dans l’autre sens, ralentis ton mouvement.",
          "S’il s’excite, fais moins de répétitions.",
          "S’il ignore le mot, retravaille sans distraction.",
          "S’il bloque, encourage-le avec ton corps plutôt qu’avec la laisse."
        ],
        homework: "Fais 10 demi-tours joyeux pendant une balade calme."
      },
      {
        id: "premium-06",
        category: "Rester seul",
        title: "Préparer les faux départs",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Désensibiliser ton chien aux signes de départ comme les clés, le manteau ou les chaussures.",
        intro: "Certains chiens stressent avant même que l’humain parte. Ils repèrent les chaussures, les clés, le sac ou le manteau et montent déjà en inquiétude.",
        why: "Si ton chien panique avant le départ, il sera difficile pour lui de rester calme ensuite. Les faux départs rendent ces signaux plus neutres.",
        before: [
          "Choisis un moment calme.",
          "Ne pars pas vraiment au début.",
          "Garde une attitude naturelle.",
          "Ne rassure pas avec une voix inquiète.",
          "Fais plusieurs répétitions très courtes."
        ],
        progress: [
          "Jour 1 : prendre les clés puis les reposer.",
          "Jour 2 : mettre les chaussures sans sortir.",
          "Jour 3 : ouvrir la porte sans partir.",
          "Jour 4 : sortir 2 secondes puis revenir.",
          "Jour 5 : varier les gestes dans le désordre."
        ],
        steps: [
          "Prends tes clés puis repose-les sans sortir.",
          "Mets ton manteau puis enlève-le.",
          "Ouvre la porte puis reste à l’intérieur.",
          "Reste neutre, sans grand au revoir.",
          "Répète plusieurs petites scènes dans la journée."
        ],
        success: [
          "Ton chien réagit moins aux clés.",
          "Il reste plus calme quand tu mets tes chaussures.",
          "Il ne te suit plus systématiquement jusqu’à la porte.",
          "Les départs deviennent moins chargés émotionnellement.",
          "Il récupère plus vite après les signaux de départ."
        ],
        mistakes: [
          "Faire un faux départ trop long dès le début.",
          "Rassurer avec une voix inquiète.",
          "Partir vraiment quand il est déjà paniqué.",
          "Faire une seule grosse séance.",
          "Le gronder s’il s’inquiète."
        ],
        troubleshooting: [
          "S’il se lève dès les clés, commence avec un seul bruit de clés.",
          "S’il aboie, réduis la difficulté.",
          "S’il colle trop, travaille d’abord le panier.",
          "S’il panique, ne passe pas encore aux vraies absences.",
          "S’il reste calme, augmente très progressivement."
        ],
        homework: "Fais 5 faux départs très courts par jour pendant 5 jours."
      },
      {
        id: "premium-07",
        category: "Rester seul",
        title: "Créer une zone rassurante",
        level: "Intermédiaire",
        duration: "12 min",
        goal: "Préparer un espace où ton chien peut se poser pendant tes absences.",
        intro: "La zone de solitude ne doit pas être vécue comme une punition. Elle doit annoncer sécurité, confort et occupations calmes.",
        why: "Un espace rassurant aide ton chien à se sentir moins perdu quand tu t’absentes. Cela peut limiter les déplacements anxieux, les destructions et les pleurs.",
        before: [
          "Choisis un lieu calme mais pas totalement isolé.",
          "Ajoute un panier confortable.",
          "Laisse de l’eau accessible.",
          "Retire les objets dangereux.",
          "Teste la zone quand tu es présent."
        ],
        progress: [
          "Jour 1 : découvrir la zone avec des friandises.",
          "Jour 2 : y rester quelques secondes.",
          "Jour 3 : fermer brièvement une barrière ou une porte.",
          "Jour 4 : ajouter une occupation calme.",
          "Jour 5 : faire une mini absence."
        ],
        steps: [
          "Choisis un coin sécurisé avec panier et eau.",
          "Ajoute une odeur familière et une occupation calme.",
          "Fais-le y aller quand tu es présent.",
          "Ferme quelques secondes puis rouvre avant l’inquiétude.",
          "Augmente très progressivement."
        ],
        success: [
          "Ton chien entre plus facilement dans sa zone.",
          "Il s’y couche même quand tu es là.",
          "Il accepte de rester quelques secondes seul.",
          "Il explore moins anxieusement la maison.",
          "Il associe cet endroit à quelque chose de positif."
        ],
        mistakes: [
          "Utiliser cette zone uniquement quand tu pars.",
          "Y envoyer le chien après une bêtise.",
          "Choisir un lieu trop isolé.",
          "Le laisser paniquer dedans.",
          "Mettre trop d’objets excitants."
        ],
        troubleshooting: [
          "S’il refuse d’y aller, ajoute des récompenses dans la zone.",
          "S’il ressort immédiatement, ne ferme pas encore.",
          "S’il détruit, vérifie que l’occupation est adaptée.",
          "S’il aboie, raccourcis la durée.",
          "S’il dort ailleurs, déplace légèrement la zone."
        ],
        homework: "Propose une occupation dans sa zone 10 minutes par jour pendant une semaine."
      },
      {
        id: "premium-08",
        category: "Rester seul",
        title: "Augmenter l’absence progressivement",
        level: "Avancé",
        duration: "15 min",
        goal: "Allonger les absences sans dépasser le seuil de stress de ton chien.",
        intro: "Si ton chien panique à 2 minutes, partir 30 minutes ne l’entraîne pas. Cela renforce plutôt son inquiétude. La progression doit être très graduelle.",
        why: "La solitude s’apprend par petites réussites. Plus ton chien accumule des absences calmes, plus il prend confiance.",
        before: [
          "Prépare une zone calme.",
          "Sors ton chien avant l’exercice.",
          "Choisis un moment où il est détendu.",
          "Prévois des durées très courtes au départ.",
          "Note les réactions après chaque essai."
        ],
        progress: [
          "Jour 1 : 5 à 10 secondes.",
          "Jour 2 : 20 à 30 secondes.",
          "Jour 3 : 1 minute si tout va bien.",
          "Jour 4 : 2 à 3 minutes.",
          "Jour 5 et plus : augmenter seulement si les étapes précédentes sont calmes."
        ],
        steps: [
          "Commence par 5 à 10 secondes derrière la porte.",
          "Reviens avant les pleurs ou l’agitation.",
          "Augmente par petits paliers.",
          "Si le stress revient, redescends au palier précédent.",
          "Garde les départs et retours neutres."
        ],
        success: [
          "Ton chien reste calme pendant les courtes absences.",
          "Il ne se précipite pas systématiquement à ton retour.",
          "Il peut se coucher après ton départ.",
          "Il récupère rapidement.",
          "Les durées augmentent sans panique."
        ],
        mistakes: [
          "Monter trop vite en durée.",
          "Rentrer uniquement quand il aboie fort.",
          "Faire des adieux très émotionnels.",
          "Comparer son chien à un autre.",
          "Ignorer les signes de stress."
        ],
        troubleshooting: [
          "S’il pleure avant 30 secondes, reviens à 5 secondes.",
          "S’il gratte la porte, travaille d’abord la zone rassurante.",
          "S’il détruit, réduis la durée et augmente les occupations calmes.",
          "S’il panique vite, ne force pas.",
          "S’il progresse, garde plusieurs répétitions faciles."
        ],
        homework: "Crée une échelle d’absence de 10 secondes à 5 minutes."
      },
      {
        id: "premium-09",
        category: "Rester seul",
        title: "Gérer les retours à la maison",
        level: "Intermédiaire",
        duration: "8 min",
        goal: "Éviter de renforcer une excitation excessive à ton retour.",
        intro: "Le retour peut être très intense pour un bouledogue. Il est content, soulagé, excité. L’objectif est de garder l’émotion positive tout en apprenant à redescendre.",
        why: "Si chaque retour devient une explosion, ton chien peut attendre ce moment avec encore plus de tension. Des retours calmes aident à rendre les absences plus ordinaires.",
        before: [
          "Prévois de rentrer calmement.",
          "Évite les grandes phrases aiguës dès l’entrée.",
          "Ignore les sauts sans repousser brutalement.",
          "Récompense les pattes au sol.",
          "Garde la même règle à chaque retour."
        ],
        progress: [
          "Jour 1 : rentrer sans grande excitation.",
          "Jour 2 : attendre 2 secondes de calme.",
          "Jour 3 : saluer seulement pattes au sol.",
          "Jour 4 : demander un assis si possible.",
          "Jour 5 : garder le rituel même après une longue absence."
        ],
        steps: [
          "Entre calmement.",
          "Pose tes affaires sans crier son prénom.",
          "Attends quelques secondes de calme avant de le saluer.",
          "Salue-le quand ses quatre pattes sont au sol.",
          "Ignore les sauts sans repousser brutalement."
        ],
        success: [
          "Ton chien saute moins au retour.",
          "Il redescend plus vite.",
          "Il garde plus facilement les pattes au sol.",
          "Les retrouvailles restent joyeuses mais moins explosives.",
          "Les retours deviennent plus prévisibles."
        ],
        mistakes: [
          "Créer une fête énorme à chaque retour.",
          "Gronder les sauts tout en donnant de l’attention.",
          "Ignorer le chien alors qu’il est enfin calme.",
          "Repousser avec les mains, ce qui peut l’exciter davantage.",
          "Changer de règle selon ton humeur."
        ],
        troubleshooting: [
          "S’il saute beaucoup, tourne légèrement le corps sans parler.",
          "S’il aboie, attends une micro-pause de silence.",
          "S’il attrape les vêtements, propose un jouet calme.",
          "S’il devient incontrôlable, réduis ton énergie.",
          "S’il se calme, récompense immédiatement."
        ],
        homework: "Pendant une semaine, fais des retours calmes même après une absence courte."
      },
      {
        id: "premium-10",
        category: "Rester seul",
        title: "Occupation intelligente pendant l’absence",
        level: "Tous niveaux",
        duration: "10 min",
        goal: "Utiliser les occupations pour aider ton chien à se poser sans masquer un vrai stress.",
        intro: "Une occupation peut aider ton chien à vivre une absence plus calmement. Mais elle ne doit pas servir à cacher une vraie panique.",
        why: "Une bonne occupation canalise, apaise et donne une activité simple au chien. Mal choisie, elle peut au contraire l’exciter ou devenir dangereuse.",
        before: [
          "Teste toujours l’objet quand tu es présent.",
          "Vérifie qu’il ne peut pas avaler de morceau.",
          "Choisis une occupation adaptée à sa mâchoire.",
          "Évite les objets trop excitants.",
          "Ne laisse rien de dangereux sans surveillance."
        ],
        progress: [
          "Jour 1 : tester l’occupation en ta présence.",
          "Jour 2 : l’utiliser dans sa zone calme.",
          "Jour 3 : l’associer à une mini absence.",
          "Jour 4 : varier les occupations.",
          "Jour 5 : observer si elle l’aide vraiment à se poser."
        ],
        steps: [
          "Teste l’occupation quand tu es présent.",
          "Vérifie qu’il ne détruit pas l’objet.",
          "Réserve certaines occupations aux moments calmes.",
          "Retire l’objet s’il monte trop en excitation.",
          "Observe s’il se pose vraiment après."
        ],
        success: [
          "Ton chien s’occupe calmement.",
          "Il ne détruit pas l’objet.",
          "Il se couche après l’activité.",
          "Il associe l’absence à un moment plus prévisible.",
          "Il semble moins agité au départ."
        ],
        mistakes: [
          "Donner un objet dangereux sans test.",
          "Penser qu’un jouet suffit en cas de panique.",
          "Laisser uniquement des objets très excitants.",
          "Changer d’occupation tous les jours sans observer.",
          "Confondre occupation et solution miracle."
        ],
        troubleshooting: [
          "S’il détruit l’objet, choisis une option plus solide.",
          "S’il s’excite, propose une activité plus calme.",
          "S’il ignore l’objet, teste une odeur plus motivante.",
          "S’il panique malgré tout, reviens au travail progressif de solitude.",
          "S’il avale vite, privilégie les tapis de léchage ou jeux adaptés."
        ],
        homework: "Teste deux occupations différentes et note laquelle l’apaise le plus."
      },
    ],
    [
      'premium-12',
      'Stop aboiements',
      'Aboiements à la fenêtre',
      'Intermédiaire',
      '12 min',
      'Réduire les aboiements déclenchés par les passants, voitures ou chiens visibles dehors.',
      'La fenêtre peut devenir un poste de surveillance. Chaque passant qui disparaît renforce l’impression que l’aboiement a fonctionné.',
      [
        'Limite l’accès visuel aux heures difficiles.',
        'Appelle ton chien dès qu’il fixe dehors, avant l’aboiement.',
        'Récompense le déplacement loin de la fenêtre.',
        'Crée une zone calme loin du point de surveillance.',
        'Réintroduis l’accès progressivement.',
      ],
      [
        'Le laisser surveiller toute la journée.',
        'Attendre qu’il aboie fort pour intervenir.',
        'Le tirer brusquement loin de la fenêtre.',
      ],
      'Travaille 5 rappels loin de la fenêtre par jour.',
    ],
    [
      'premium-13',
      'Stop aboiements',
      'Aboiements aux bruits du voisinage',
      'Intermédiaire',
      '12 min',
      'Aider ton chien à moins réagir aux portes, pas, ascenseur ou voix dans l’immeuble.',
      'Les bruits invisibles peuvent inquiéter le chien. On lui apprend que ces sons n’ont pas besoin d’être gérés par lui.',
      [
        'Repère les sons les plus déclencheurs.',
        'À faible intensité, donne une friandise dès que le bruit apparaît.',
        'Garde une attitude normale et calme.',
        'Récompense la micro-pause de silence après un aboiement.',
        'Propose le panier si le bruit revient.',
      ],
      [
        'Se précipiter vers la porte avec lui.',
        'Dire “chut” sans proposer quoi faire.',
        'Travailler uniquement quand le bruit est déjà trop fort.',
      ],
      'Associe 10 petits bruits par jour à une récompense calme.',
    ],
    [
      'premium-14',
      'Stop aboiements',
      'Aboiements de demande d’attention',
      'Intermédiaire',
      '10 min',
      'Réduire les aboiements utilisés pour obtenir jeu, nourriture, canapé ou attention.',
      'Si ton chien aboie et obtient ce qu’il veut, il apprend que l’aboiement fonctionne.',
      [
        'Identifie ce qu’il cherche vraiment.',
        'Ignore l’aboiement si ce n’est pas un besoin urgent.',
        'Dès qu’il se tait une seconde, demande un assis ou un regard.',
        'Récompense cette demande calme si elle est appropriée.',
        'Garde toujours la même règle.',
      ],
      [
        'Donner la friandise pendant qu’il aboie.',
        'Le regarder intensément à chaque aboiement.',
        'Céder parfois et refuser parfois sans cohérence.',
      ],
      'Choisis une demande fréquente et impose la même alternative pendant 7 jours.',
    ],
    [
      'premium-15',
      'Stop aboiements',
      'Quand quelqu’un sonne à la porte',
      'Avancé',
      '15 min',
      'Transformer la sonnette en signal de retour au panier plutôt qu’en explosion.',
      'La sonnette annonce une arrivée, donc elle déclenche souvent beaucoup d’émotion. On crée une nouvelle association.',
      [
        'Entraîne d’abord le panier sans sonnette.',
        'Utilise un son de sonnette faible ou enregistré.',
        'Guide ton chien vers son panier avec une friandise.',
        'Récompense même s’il reste un peu d’excitation au début.',
        'Ajoute ensuite une vraie personne complice.',
      ],
      [
        'Commencer directement avec un invité réel.',
        'Ouvrir pendant qu’il hurle et saute.',
        'Demander un silence parfait dès le départ.',
      ],
      'Fais 3 répétitions par jour avec un son de sonnette faible.',
    ],
    [
      'premium-16',
      'Rappel avancé',
      'Commencer le rappel dehors en longe',
      'Intermédiaire',
      '12 min',
      'Travailler le rappel dehors en sécurité, sans détacher trop tôt.',
      'La longe donne de la liberté tout en gardant une sécurité. C’est l’étape idéale entre la maison et la liberté totale.',
      [
        'Utilise une longe dans un lieu calme.',
        'Laisse-le explorer sans tension permanente.',
        'Appelle quand il n’est pas trop absorbé.',
        'Récompense fort puis relâche-le pour explorer à nouveau.',
        'Garde les rappels faciles au début.',
      ],
      [
        'Appeler dans une distraction trop forte.',
        'Rattacher ou rentrer après chaque rappel.',
        'Tirer la longe au lieu d’apprendre.',
      ],
      'Fais 5 rappels en longe par sortie, toujours faciles au début.',
    ],
    [
      'premium-17',
      'Rappel avancé',
      'Augmenter les distractions',
      'Avancé',
      '14 min',
      'Renforcer le rappel lorsque l’environnement devient plus intéressant.',
      'On augmente progressivement : odeurs, personnes, chiens au loin. Chaque réussite doit rester possible.',
      [
        'Commence dans un lieu déjà réussi.',
        'Ajoute une distraction faible.',
        'Appelle avant qu’il soit totalement absorbé.',
        'Récompense avec une friandise de grande valeur.',
        'Si l’échec arrive, baisse la difficulté.',
      ],
      [
        'Tester au parc bondé trop vite.',
        'Se fâcher s’il ne revient pas.',
        'Ne pas adapter la récompense à la difficulté.',
      ],
      'Choisis une seule distraction à travailler cette semaine.',
    ],
    [
      'premium-18',
      'Rappel avancé',
      'Créer un rappel d’urgence',
      'Avancé',
      '10 min',
      'Créer un mot spécial réservé aux situations importantes.',
      'Le rappel d’urgence doit être rare, ultra positif et très récompensé. Il ne sert pas pour rentrer du parc tous les jours.',
      [
        'Choisis un mot unique.',
        'Dans la maison, dis ce mot puis donne une récompense exceptionnelle.',
        'Ne demande rien d’autre au début.',
        'Travaille ensuite à courte distance dans un lieu calme.',
        'Garde ce mot pour les vrais besoins.',
      ],
      [
        'Utiliser le mot trop souvent.',
        'L’utiliser pour gronder.',
        'Récompenser avec une simple croquette au début.',
      ],
      'Pendant 7 jours, fais 2 associations par jour : mot spécial + jackpot.',
    ],
    [
      'premium-19',
      'Rappel avancé',
      'Rappel quand il renifle',
      'Intermédiaire',
      '12 min',
      'Lui apprendre à quitter une odeur pour revenir vers toi.',
      'Pour beaucoup de bouledogues, les odeurs sont plus fortes que la friandise. Il faut utiliser l’odeur comme récompense aussi.',
      [
        'Laisse-le renifler quelques secondes.',
        'Appelle quand il lève légèrement la tête.',
        'Récompense son retour.',
        'Renvoie-le renifler avec “vas-y”.',
        'Il comprend que revenir ne stoppe pas tout plaisir.',
      ],
      [
        'Appeler quand il est totalement absorbé.',
        'Interdire de retourner renifler après le rappel.',
        'Tirer sur la longe au lieu d’attendre le bon moment.',
      ],
      'Fais 5 rappels-reniflage par balade pendant 5 jours.',
    ],
    [
      'premium-20',
      'Rappel avancé',
      'Jeu du rappel à plusieurs personnes',
      'Intermédiaire',
      '10 min',
      'Rendre le rappel ludique et renforcer la vitesse de retour.',
      'Le jeu du ping-pong est parfait pour les chiens qui reviennent lentement ou sans enthousiasme.',
      [
        'Deux personnes se placent à quelques mètres.',
        'La première appelle le chien.',
        'Elle récompense quand il arrive.',
        'La deuxième attend quelques secondes puis appelle à son tour.',
        'Arrête avant qu’il se lasse.',
      ],
      [
        'Appeler en même temps.',
        'Faire trop de répétitions.',
        'Jouer quand le chien est déjà épuisé.',
      ],
      'Fais ce jeu 2 fois dans la semaine, en séance très courte.',
    ],
    [
      'premium-21',
      'Chiot bouledogue',
      'Mordillements : rediriger sans punir',
      'Chiot',
      '10 min',
      'Apprendre au chiot à mordiller ses jouets plutôt que les mains ou vêtements.',
      'Le mordillement est normal chez le chiot. Le but est de lui apprendre quoi mordiller, pas de le punir.',
      [
        'Garde un jouet à proximité.',
        'S’il mordille la main, immobilise-la.',
        'Présente le jouet sans excitation.',
        'Félicite dès qu’il mordille le jouet.',
        'Stoppe le jeu 30 secondes si l’excitation monte.',
      ],
      [
        'Agiter les mains devant son museau.',
        'Le repousser brutalement.',
        'Attendre qu’il soit surexcité pour proposer un jouet.',
      ],
      'Prépare 3 jouets de textures différentes et teste celui qu’il préfère.',
    ],
    [
      'premium-22',
      'Chiot bouledogue',
      'Propreté : construire une routine fiable',
      'Chiot',
      '12 min',
      'Mettre en place des sorties stratégiques pour accélérer l’apprentissage de la propreté.',
      'La propreté repose surtout sur l’anticipation. Plus le chiot réussit dehors, plus il comprend vite.',
      [
        'Sors-le après réveil, repas, jeu et sieste.',
        'Va toujours au même endroit au début.',
        'Reste calme jusqu’à ce qu’il fasse.',
        'Récompense immédiatement dehors.',
        'Nettoie les accidents sans gronder.',
      ],
      [
        'Gronder après coup.',
        'Attendre trop longtemps entre deux sorties.',
        'Jouer dehors avant les besoins.',
      ],
      'Note les horaires des besoins pendant 5 jours.',
    ],
    [
      'premium-23',
      'Chiot bouledogue',
      'Premières nuits plus calmes',
      'Chiot',
      '10 min',
      'Aider le chiot à dormir avec moins de pleurs et plus de sécurité émotionnelle.',
      'Un chiot vient souvent de quitter sa fratrie. Les premières nuits doivent être rassurantes, pas brutales.',
      [
        'Installe son couchage près de toi au début si besoin.',
        'Prévois une sortie calme avant le coucher.',
        'Évite les jeux excitants le soir.',
        'Réponds calmement aux vrais besoins nocturnes.',
        'Éloigne progressivement le couchage si tu le souhaites.',
      ],
      [
        'Le laisser paniquer longtemps.',
        'Jouer avec lui en pleine nuit.',
        'Changer le lieu de couchage tous les soirs.',
      ],
      'Crée un rituel du soir identique pendant une semaine.',
    ],
    [
      'premium-24',
      'Chiot bouledogue',
      'Socialisation douce et sécurisée',
      'Chiot',
      '15 min',
      'Exposer le chiot au monde sans le submerger.',
      'Socialiser ne veut pas dire faire rencontrer tout le monde. Cela veut dire créer des expériences positives et contrôlées.',
      [
        'Choisis un lieu calme avec quelques stimulations.',
        'Laisse-le observer sans forcer.',
        'Récompense les regards calmes.',
        'Éloigne-toi s’il se fige ou cherche à fuir.',
        'Termine par une réussite courte.',
      ],
      [
        'Mettre le chiot dans les bras de tout le monde.',
        'Forcer les rencontres avec des chiens inconnus.',
        'Confondre socialisation et immersion stressante.',
      ],
      'Fais 3 mini-sorties d’observation de 10 minutes cette semaine.',
    ],
    [
      'premium-25',
      'Calme à la maison',
      'Ne pas sauter sur les invités',
      'Intermédiaire',
      '12 min',
      'Remplacer les sauts par un comportement poli et récompensé.',
      'Sauter est souvent une demande de contact. Le chien doit apprendre que les pattes au sol obtiennent plus d’attention.',
      [
        'Entraîne avec une personne complice.',
        'La personne ignore les sauts.',
        'Dès que les pattes sont au sol, elle récompense.',
        'Ajoute ensuite de vrais invités prévenus.',
        'Répète avec plusieurs entrées calmes.',
      ],
      [
        'Caresser pendant qu’il saute.',
        'Le repousser avec les mains.',
        'Ne pas expliquer la règle aux invités.',
      ],
      'Fais 5 fausses entrées avec une personne complice.',
    ],
    [
      'premium-26',
      'Calme à la maison',
      'Canaliser l’excitation du soir',
      'Tous niveaux',
      '10 min',
      'Réduire les moments de folie du soir avec une routine de redescente.',
      'Beaucoup de chiens ont un pic d’excitation le soir. On peut l’accompagner au lieu de subir les zoomies.',
      [
        'Repère l’heure du pic.',
        'Avant ce moment, propose une activité calme.',
        'Baisse les stimulations : voix douce, lumière calme.',
        'Récompense les moments où il se pose.',
        'Évite les jeux de poursuite.',
      ],
      [
        'Attendre qu’il soit déjà ingérable.',
        'Répondre par des jeux très excitants.',
        'Croire qu’il faut forcément le faire courir.',
      ],
      'Mets en place une routine calme 20 minutes avant son pic habituel.',
    ],
    [
      'premium-27',
      'Calme à la maison',
      'Le tapis de calme',
      'Intermédiaire',
      '12 min',
      'Apprendre au chien à se poser sur un tapis pendant les moments de vie quotidienne.',
      'Le tapis de calme est utile quand tu cuisines, travailles, reçois ou veux éviter qu’il soit dans tes jambes.',
      [
        'Pose un tapis spécifique au sol.',
        'Récompense dès qu’il le regarde ou le touche.',
        'Augmente vers deux pattes puis couché dessus.',
        'Ajoute le mot “tapis”.',
        'Récompense aussi la durée.',
      ],
      [
        'Vouloir qu’il y reste 20 minutes tout de suite.',
        'Utiliser le tapis comme punition.',
        'Ne jamais récompenser la durée.',
      ],
      'Travaille le tapis 3 minutes par jour pendant une semaine.',
    ],
    [
      'premium-28',
      'Obéissance utile',
      'Apprendre le “laisse”',
      'Intermédiaire',
      '10 min',
      'Apprendre à renoncer à un objet ou une nourriture au sol.',
      'Le “laisse” est une commande de sécurité. Elle doit être apprise tranquillement avant d’être utilisée dehors.',
      [
        'Tiens une friandise dans la main fermée.',
        'Attends qu’il recule ou détourne le nez.',
        'Dis “oui” et donne une autre friandise.',
        'Ajoute le mot “laisse” quand il comprend.',
        'Travaille ensuite avec une friandise posée au sol mais protégée.',
      ],
      [
        'Laisser le chien voler l’objet.',
        'Dire “laisse” trop tôt sans apprentissage.',
        'Transformer l’exercice en confrontation.',
      ],
      'Fais 5 répétitions par jour avec une friandise dans la main fermée.',
    ],
    [
      'premium-29',
      'Obéissance utile',
      'Apprendre le “donne” sans bataille',
      'Intermédiaire',
      '10 min',
      'Récupérer un objet sans poursuite ni conflit.',
      'Si tu arraches toujours les objets, ton chien peut apprendre à fuir ou garder. Le “donne” doit être un échange gagnant.',
      [
        'Donne un jouet peu précieux.',
        'Présente une friandise près de son nez.',
        'Quand il lâche, dis “donne” puis récompense.',
        'Rends-lui parfois le jouet après l’échange.',
        'Augmente progressivement la valeur des objets.',
      ],
      [
        'Courir après lui.',
        'Lui retirer systématiquement ce qu’il donne.',
        'Commencer avec un objet très précieux.',
      ],
      'Fais 5 échanges par jour avec un jouet simple.',
    ],
    [
      'premium-30',
      'Obéissance utile',
      'Monter et descendre du canapé sur demande',
      'Tous niveaux',
      '8 min',
      'Garder des règles claires autour du canapé sans conflit.',
      'Le canapé peut être autorisé tout en restant cadré. L’important est que ton chien sache monter et descendre quand tu le demandes.',
      [
        'Choisis deux mots : “monte” et “descends”.',
        'Invite-le à monter avec une friandise.',
        'Lance une friandise au sol en disant “descends”.',
        'Récompense une fois au sol.',
        'Répète hors conflit.',
      ],
      [
        'Le pousser physiquement.',
        'Changer les règles selon l’humeur.',
        'Travailler quand il dort profondément.',
      ],
      'Fais 3 montées/descentes volontaires par jour pendant 5 jours.',
    ],
    [
      'premium-31',
      'Vie de famille',
      'Gestion de la jalousie',
      'Intermédiaire',
      '12 min',
      'Réduire les interruptions quand tu t’occupes de quelqu’un d’autre.',
      'Ce qu’on appelle jalousie est souvent une demande d’attention ou une difficulté à partager les moments sociaux.',
      [
        'Repère les situations : téléphone, invité, enfant, autre animal.',
        'Avant la situation, donne-lui une place claire.',
        'Récompense le calme pendant que ton attention est ailleurs.',
        'Redirige sans gronder s’il s’interpose.',
        'Offre un moment avec lui quand il est calme.',
      ],
      [
        'Le repousser vivement.',
        'Lui donner attention uniquement quand il s’impose.',
        'Vouloir qu’il accepte tout sans apprentissage.',
      ],
      'Fais 3 mini-scènes par jour : téléphone + chien sur tapis + récompense calme.',
    ],
    [
      'premium-32',
      'Vie de famille',
      'Préparer l’arrivée d’un bébé',
      'Avancé',
      '15 min',
      'Préparer ton chien aux nouveaux sons, objets et routines avant l’arrivée du bébé.',
      'Le chien doit découvrir progressivement les nouveautés pour éviter que tout change brutalement le jour J.',
      [
        'Présente poussette, lit et nouveaux objets calmement.',
        'Travaille le panier dans les pièces concernées.',
        'Habitue-le à des sons de bébé à faible volume.',
        'Révise les bases : laisse, descends, panier, calme.',
        'Change les routines avant l’arrivée, pas après.',
      ],
      [
        'Tout changer le jour de l’arrivée.',
        'Exclure brutalement le chien.',
        'Forcer le contact avec le bébé.',
      ],
      'Choisis une nouvelle règle et installe-la progressivement cette semaine.',
    ],
    [
      'premium-33',
      'Vie de famille',
      'Préparer l’arrivée d’un deuxième chien',
      'Avancé',
      '15 min',
      'Organiser les premières rencontres et éviter les tensions inutiles.',
      'Une bonne cohabitation commence par des introductions calmes, des ressources séparées et du temps.',
      [
        'Prévois une rencontre en terrain neutre.',
        'Marche les deux chiens en parallèle à distance.',
        'Évite les face-à-face en laisse courte.',
        'Sépare gamelles, couchages et jouets au début.',
        'Garde des moments individuels avec ton bouledogue.',
      ],
      [
        'Les mettre ensemble directement dans un petit espace.',
        'Laisser des jouets précieux dès le premier jour.',
        'Punir ton chien s’il exprime un inconfort modéré.',
      ],
      'Prépare les espaces séparés avant l’arrivée du nouveau chien.',
    ],
    [
      'premium-34',
      'Soins et manipulation',
      'Toucher les pattes sans stress',
      'Tous niveaux',
      '10 min',
      'Habituer ton chien à accepter le contact sur les pattes pour les soins.',
      'Les bouledogues peuvent être sensibles aux pattes. On travaille en douceur pour faciliter nettoyage, inspection et vétérinaire.',
      [
        'Commence quand il est calme.',
        'Touche brièvement l’épaule ou la patte, puis récompense.',
        'Augmente vers tenir une seconde.',
        'Regarde entre les coussinets très brièvement.',
        'Arrête avant qu’il retire fortement la patte.',
      ],
      [
        'Tenir la patte trop longtemps.',
        'Forcer malgré l’inconfort.',
        'Faire l’exercice seulement quand il y a déjà une douleur.',
      ],
      'Fais 3 touches-récompenses par patte pendant 5 jours.',
    ],
    [
      'premium-35',
      'Soins et manipulation',
      'Nettoyage des plis du visage',
      'Tous niveaux',
      '8 min',
      'Rendre le nettoyage du visage plus coopératif et moins stressant.',
      'Le bouledogue a souvent besoin de soins réguliers. Plus le geste est prévisible et récompensé, mieux il l’accepte.',
      [
        'Montre la compresse sans toucher, puis récompense.',
        'Touche brièvement le côté du visage.',
        'Nettoie une toute petite zone.',
        'Fais une pause avant qu’il s’agace.',
        'Augmente la durée sur plusieurs jours.',
      ],
      [
        'Bloquer la tête fortement.',
        'Tout nettoyer d’un coup.',
        'Sortir le matériel uniquement au moment désagréable.',
      ],
      'Fais 2 mini-séances de familiarisation avec le matériel par jour.',
    ],
    [
      'premium-36',
      'Soins et manipulation',
      'Coupe des griffes : désensibilisation',
      'Avancé',
      '12 min',
      'Préparer ton chien à la coupe des griffes sans panique.',
      'On ne commence pas par couper. On commence par rendre le coupe-griffe banal et positif.',
      [
        'Pose le coupe-griffe au sol, récompense le regard.',
        'Prends l’outil en main sans toucher la patte.',
        'Touche une patte avec ta main.',
        'Approche l’outil d’une griffe sans couper.',
        'Coupe une minuscule pointe seulement quand il est prêt.',
      ],
      [
        'Couper toutes les griffes d’un coup.',
        'Attendre qu’il se débatte pour arrêter.',
        'Ne sortir l’outil que pour couper.',
      ],
      'Pendant 7 jours, fais uniquement apparition de l’outil + récompense.',
    ],
    [
      'premium-37',
      'Soins et manipulation',
      'Refus du harnais : l’enfiler sans lutte',
      'Intermédiaire',
      '10 min',
      'Aider ton chien à accepter le harnais sans fuite ni blocage.',
      'Beaucoup de chiens n’aiment pas passer la tête ou être manipulés. On transforme le harnais en signal positif.',
      [
        'Pose le harnais au sol et récompense l’approche.',
        'Tiens-le ouvert avec une friandise au centre.',
        'Laisse-le passer la tête lui-même.',
        'Ferme une attache, récompense, puis retire.',
        'Répète avant une vraie sortie.',
      ],
      [
        'Poursuivre le chien avec le harnais.',
        'L’enfiler de force.',
        'Associer le harnais uniquement à des sorties stressantes.',
      ],
      'Fais 5 passages de tête sans attacher pendant 3 jours.',
    ],
    [
      'premium-38',
      'Sécurité',
      'Nourriture au sol : éviter qu’il avale tout',
      'Avancé',
      '12 min',
      'Réduire le risque qu’il avale ce qu’il trouve dehors.',
      'Ce comportement peut être dangereux. On combine anticipation, “laisse”, échange et gestion de l’environnement.',
      [
        'Travaille “laisse” à la maison.',
        'Dehors, garde une distance avec les déchets visibles.',
        'Récompense quand il regarde puis revient vers toi.',
        'Utilise “donne” avec échange s’il a déjà pris quelque chose.',
        'Évite les zones trop difficiles au début.',
      ],
      [
        'Arracher la gueule systématiquement.',
        'Travailler directement dans une zone pleine de nourriture.',
        'Ne jamais récompenser le renoncement.',
      ],
      'Travaille “laisse” à la maison 5 minutes par jour avant de le tester dehors.',
    ],
    [
      'premium-39',
      'Sécurité',
      'Chaleur et effort : adapter l’éducation',
      'Tous niveaux',
      '8 min',
      'Adapter les séances aux limites physiques du bouledogue français.',
      'Le bouledogue est sensible à la chaleur et à l’effort. L’éducation doit rester courte, fraîche et raisonnable.',
      [
        'Évite les heures chaudes.',
        'Privilégie intérieur frais ou zones ombragées.',
        'Observe respiration, langue, ralentissement.',
        'Prévois eau et pauses.',
        'Remplace l’effort physique par des exercices mentaux.',
      ],
      [
        'Faire courir pour fatiguer coûte que coûte.',
        'Travailler sur sol chaud.',
        'Ignorer une respiration anormalement forte.',
      ],
      'Remplace une sortie chaude par 5 minutes de recherche de friandises à l’intérieur.',
    ],
    [
      'premium-40',
      'Plans premium',
      'Plan 7 jours : chien plus attentif',
      'Tous niveaux',
      '7 jours',
      'Créer une semaine simple pour améliorer l’attention générale.',
      'Ce plan combine regard, rappel, calme et mini-récompenses. Idéal quand ton chien t’écoute seulement quand il veut.',
      [
        'Jour 1 : récompense 10 regards spontanés.',
        'Jour 2 : fais 5 rappels faciles.',
        'Jour 3 : travaille le calme avant gamelle.',
        'Jour 4 : récompense la laisse détendue.',
        'Jours 5 à 7 : mélange panier, rappel et demi-tours.',
      ],
      [
        'Vouloir tout corriger en une semaine.',
        'Travailler seulement quand il est excité.',
        'Oublier de noter les petites réussites.',
      ],
      'Suis le plan 7 jours et note chaque jour une réussite précise.',
    ],
    [
      'premium-41',
      'Plans premium',
      'Plan 14 jours : promenade plus agréable',
      'Intermédiaire',
      '14 jours',
      'Améliorer les balades sans chercher la perfection immédiate.',
      'Ce plan travaille la laisse détendue, les odeurs, les demi-tours et les croisements à distance.',
      [
        'Jours 1-2 : observe les moments de tirage.',
        'Jours 3-6 : récompense la laisse détendue.',
        'Jours 7-10 : ajoute odeurs autorisées et demi-tours.',
        'Jours 11-13 : travaille les croisements à distance.',
        'Jour 14 : compare avec le trajet test du début.',
      ],
      [
        'Changer d’itinéraire difficile tous les jours.',
        'Vouloir une marche au pied stricte.',
        'Oublier que renifler fait partie de la balade.',
      ],
      'Utilise le même trajet test au début et à la fin des 14 jours.',
    ],
    [
      'premium-42',
      'Plans premium',
      'Plan 30 jours : rester seul',
      'Avancé',
      '30 jours',
      'Construire progressivement la tolérance à la solitude.',
      'Ce plan est volontairement progressif. En cas de détresse forte, il faut avancer lentement et demander un avis professionnel si besoin.',
      [
        'Semaine 1 : banalise clés, manteau et porte.',
        'Semaine 2 : crée une zone rassurante.',
        'Semaine 3 : augmente les absences par petits paliers.',
        'Semaine 4 : varie les horaires et les durées faciles.',
        'Chaque jour : note la durée réussie.',
      ],
      [
        'Passer de 2 minutes à 1 heure trop vite.',
        'Rentrer uniquement au pic de panique.',
        'Ne pas distinguer ennui léger et détresse réelle.',
      ],
      'Crée un tableau avec durée, réaction et niveau de stress.',
    ],
    [
      'premium-43',
      'Rester seul',
      'Chien qui suit partout : apprendre la distance',
      'Intermédiaire',
      '10 min',
      'Aider ton chien à rester calme quand tu changes de pièce.',
      'Suivre partout peut être mignon, mais cela peut rendre la solitude plus difficile. On apprend la micro-distance.',
      [
        'Demande le tapis ou le panier.',
        'Fais un pas en arrière puis reviens récompenser.',
        'Augmente à deux pas.',
        'Sors de la pièce une seconde.',
        'Reviens avant qu’il se lève au début.',
      ],
      [
        'Fermer brutalement la porte.',
        'Attendre qu’il pleure pour revenir.',
        'Confondre attachement et autonomie.',
      ],
      'Travaille 5 micro-départs par jour depuis son tapis.',
    ],
    [
      'premium-44',
      'Calme à la maison',
      'Chien trop gourmand : garder le contrôle',
      'Tous niveaux',
      '10 min',
      'Utiliser la nourriture comme récompense sans déclencher sauts, aboiements ou précipitation.',
      'La gourmandise est utile, mais le chien doit apprendre à réfléchir même en présence de nourriture.',
      [
        'Tiens une friandise dans la main fermée.',
        'Attends qu’il arrête de gratter ou lécher.',
        'Récompense dès qu’il recule ou regarde ailleurs.',
        'Ajoute ensuite un assis ou un regard avant de donner.',
        'Garde les morceaux petits.',
      ],
      [
        'Donner pendant qu’il saute.',
        'Exciter le chien avec la nourriture.',
        'Utiliser des morceaux trop gros.',
      ],
      'Avant chaque friandise, demande une seconde de calme.',
    ],
    [
      'premium-45',
      'Calme à la maison',
      'Chien collant pendant le télétravail',
      'Tous niveaux',
      '10 min',
      'Lui apprendre à se poser pendant que tu travailles.',
      'Le but n’est pas de l’ignorer toute la journée, mais de créer des moments prévisibles d’attention et de calme.',
      [
        'Prévois une mini-sortie ou une recherche de friandises avant de travailler.',
        'Installe un tapis près de ton bureau.',
        'Récompense les moments où il se couche.',
        'Fais une pause prévue pour lui avant qu’il réclame.',
        'Augmente progressivement la durée calme.',
      ],
      [
        'Répondre uniquement quand il insiste.',
        'Le laisser s’ennuyer toute la matinée.',
        'Demander 3 heures de calme sans apprentissage.',
      ],
      'Crée deux pauses chien fixes dans ta journée de travail.',
    ],
    [
      'premium-46',
      'Obéissance utile',
      'Le regard sur demande',
      'Débutant',
      '6 min',
      'Obtenir son attention avant une consigne ou une situation difficile.',
      'Le regard est la base pour récupérer ton chien avant un croisement, une porte ou une distraction.',
      [
        'Tiens une friandise près de ton visage.',
        'Quand il te regarde, dis “oui” et récompense.',
        'Ajoute un mot comme “regarde”.',
        'Travaille ensuite sans friandise visible.',
        'Utilise-le avant les petites distractions.',
      ],
      [
        'Dire le mot quand il est déjà trop distrait.',
        'Attendre un regard trop long au début.',
        'Utiliser le regard uniquement en situation difficile.',
      ],
      'Récompense 10 regards spontanés par jour pendant 3 jours.',
    ],
    [
      'premium-47',
      'Obéissance utile',
      'Apprendre “attends”',
      'Intermédiaire',
      '8 min',
      'Apprendre à patienter quelques secondes sans bouger.',
      '“Attends” est utile avant la porte, la gamelle, le trottoir, la voiture ou le canapé.',
      [
        'Demande un assis simple.',
        'Dis “attends” et fais une demi-seconde de pause.',
        'Récompense avant qu’il bouge.',
        'Augmente très progressivement la durée.',
        'Ajoute ensuite un pas en arrière.',
      ],
      [
        'Demander 30 secondes dès le début.',
        'S’éloigner trop vite.',
        'Récompenser après qu’il se soit levé.',
      ],
      'Travaille 5 attentes de 1 à 3 secondes par jour.',
    ],
    [
      'premium-48',
      'Sécurité',
      'Monter en voiture calmement',
      'Intermédiaire',
      '10 min',
      'Réduire le stress ou l’excitation autour de la voiture.',
      'La voiture peut annoncer le vétérinaire, une balade ou une séparation. Il faut la rendre plus neutre et prévisible.',
      [
        'Approche la voiture sans monter et récompense le calme.',
        'Ouvre la portière puis referme sans partir.',
        'Invite-le à monter, récompense, puis redescends.',
        'Fais de courts trajets positifs.',
        'Ne termine pas toujours par une contrainte.',
      ],
      [
        'Ne prendre la voiture que pour le vétérinaire.',
        'Forcer le chien à monter.',
        'Faire un long trajet dès le début.',
      ],
      'Fais 3 mini-séances voiture sans vrai départ cette semaine.',
    ],
    [
      'premium-49',
      'Vie de famille',
      'Accueillir les enfants calmement',
      'Avancé',
      '12 min',
      'Aider ton chien à rester calme face aux mouvements et voix d’enfants.',
      'Les enfants bougent vite et peuvent exciter ou inquiéter le chien. On travaille la distance, le calme et les règles de sécurité.',
      [
        'Travaille d’abord à distance.',
        'Récompense le regard calme vers l’enfant.',
        'Donne une zone refuge au chien.',
        'Apprends aussi aux enfants à ne pas poursuivre le chien.',
        'Stoppe l’interaction si le chien montre un inconfort.',
      ],
      [
        'Forcer le contact.',
        'Laisser un enfant déranger le chien dans son panier.',
        'Ignorer les signes d’inconfort.',
      ],
      'Crée une règle simple : le panier est une zone interdite aux enfants.',
    ],
    [
      'premium-50',
      'Plans premium',
      'Défi 7 jours : moins d’aboiements',
      'Intermédiaire',
      '7 jours',
      'Réduire un type d’aboiement précis grâce à un plan court et mesurable.',
      'On ne travaille pas tous les aboiements à la fois. On choisit un déclencheur principal et on mesure les progrès.',
      [
        'Jour 1 : note les déclencheurs.',
        'Jour 2 : limite l’accès au déclencheur principal.',
        'Jours 3-4 : récompense les micro-silences.',
        'Jours 5-6 : ajoute une alternative comme panier, regard ou rappel.',
        'Jour 7 : compare le nombre d’aboiements.',
      ],
      [
        'Vouloir supprimer tous les aboiements.',
        'Crier plus fort que le chien.',
        'Ne pas mesurer les progrès.',
      ],
      'Choisis un seul aboiement à travailler et note le nombre de fois par jour.',
    ],
  ].map(
    ([
      id,
      category,
      title,
      level,
      duration,
      goal,
      intro,
      steps,
      mistakes,
      homework,
    ]) => ({
      id: id as string,
      category: category as string,
      title: title as string,
      level: level as string,
      duration: duration as string,
      goal: goal as string,
      intro: intro as string,
      steps: steps as string[],
      mistakes: mistakes as string[],
      homework: homework as string,
    })
  ),
];

const enrichLesson = (lesson: Lesson): Lesson => ({
  ...lesson,
  why:
    lesson.why ??
    `Cette leçon aide ton bouledogue à comprendre une règle claire sans pression. Le but n’est pas d’obtenir un chien parfait, mais de créer une habitude répétable, positive et facile à refaire dans la vraie vie.`,
  before: lesson.before ?? [
    'Choisis un moment où ton chien est disponible, pas juste après une grosse excitation.',
    'Prépare 5 à 10 toutes petites récompenses faciles à avaler.',
    'Installe-toi dans un endroit calme, sans trop de distractions au début.',
    'Garde une séance courte : mieux vaut 3 minutes réussies que 15 minutes compliquées.',
    'Arrête avant qu’il fatigue, surtout s’il fait chaud ou s’il respire fort.',
  ],
  progress: lesson.progress ?? [
    'Étape 1 : travaille dans la maison, dans un contexte très simple.',
    'Étape 2 : répète plusieurs fois avec moins d’aide de ta part.',
    'Étape 3 : ajoute une petite distraction, mais seulement si les bases sont comprises.',
    'Étape 4 : utilise l’exercice dans une situation réelle du quotidien.',
    'Étape 5 : garde quelques répétitions faciles pour entretenir l’habitude.',
  ],
  success: lesson.success ?? [
    'Ton chien comprend plus vite ce que tu attends de lui.',
    'Il reste plus calme pendant la séance.',
    'Tu as besoin de répéter moins souvent la consigne.',
    'Il réussit au moins 3 fois sur 5 sans se frustrer.',
    'Il revient plus facilement vers toi après une erreur ou une distraction.',
  ],
  troubleshooting: lesson.troubleshooting ?? [
    'S’il ne comprend pas, rends l’exercice plus facile au lieu de répéter plus fort.',
    'S’il s’excite, fais une pause et reprends plus tard dans un contexte plus calme.',
    'S’il ignore la récompense, teste une friandise plus motivante ou un lieu moins stimulant.',
    'S’il échoue plusieurs fois, reviens à l’étape précédente pendant quelques séances.',
    'S’il semble stressé, stoppe l’exercice et reprends un autre jour plus doucement.',
  ],
});

const lessonBank = baseLessons.map(enrichLesson);

const categories = [
  'Toutes',
  ...Array.from(new Set(lessonBank.map((lesson) => lesson.category))),
];

export default function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

useEffect(() => {
  const handler = (e: any) => {
    e.preventDefault();
    setDeferredPrompt(e);
  };

  window.addEventListener('beforeinstallprompt', handler);

  return () => {
    window.removeEventListener('beforeinstallprompt', handler);
  };
}, []);
  const [tab, setTab] = useState('home');
  const [premium, setPremium] = useState(() => {
    return localStorage.getItem("boubou-premium") === "true";
  });
  
  const [dogName, setDogName] = useState(() => {
    return localStorage.getItem("boubou-dog-name") || "Oscar";
  });
  
  const [done, setDone] = useState<string[]>(() => {
    const saved = localStorage.getItem("boubou-done");
    return saved ? JSON.parse(saved) : ["free-01", "free-02"];
  });
  const [dogSex, setDogSex] = useState(() => {
    return localStorage.getItem("boubou-dog-sex") || "Mâle";
  });
  
  const [dogAge, setDogAge] = useState(() => {
    return localStorage.getItem("boubou-dog-age") || "2 ans";
  });
  
  const [dogWeight, setDogWeight] = useState(() => {
    return localStorage.getItem("boubou-dog-weight") || "12 kg";
  });
  
  const [dogGoal, setDogGoal] = useState(() => {
    return localStorage.getItem("boubou-dog-goal") || "Promenade calme";
  });
  
  const [dogPhoto, setDogPhoto] = useState(() => {
    return localStorage.getItem("boubou-dog-photo") || "";
  });
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [category, setCategory] = useState('Toutes');
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("boubou-premium", String(premium));
  }, [premium]);
  
  useEffect(() => {
    localStorage.setItem("boubou-dog-name", dogName);
  }, [dogName]);
  
  useEffect(() => {
    localStorage.setItem("boubou-done", JSON.stringify(done));
  }, [done]);
  
  useEffect(() => {
    localStorage.setItem("boubou-dog-sex", dogSex);
  }, [dogSex]);
  
  useEffect(() => {
    localStorage.setItem("boubou-dog-age", dogAge);
  }, [dogAge]);
  
  useEffect(() => {
    localStorage.setItem("boubou-dog-weight", dogWeight);
  }, [dogWeight]);
  
  useEffect(() => {
    localStorage.setItem("boubou-dog-goal", dogGoal);
  }, [dogGoal]);
  
  useEffect(() => {
    localStorage.setItem("boubou-dog-photo", dogPhoto);
  }, [dogPhoto]);
  const filteredLessons = useMemo(() => {
    return lessonBank.filter((lesson) => {
      const matchCategory =
        category === 'Toutes' || lesson.category === category;
      const q = query.toLowerCase();
      const matchQuery =
        lesson.title.toLowerCase().includes(q) ||
        lesson.category.toLowerCase().includes(q) ||
        lesson.goal.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  const freeLessons = lessonBank.filter((lesson) => lesson.free).length;
  const premiumLessons = lessonBank.length - freeLessons;
  const progress = Math.round((done.length / lessonBank.length) * 100);

  const openLesson = (lesson: Lesson) => {
    if (!lesson.free && !premium) {
      setTab('premium');
      return;
    }
    setSelectedLesson(lesson);
  };

  const validateLesson = (id: string) => {
    if (done.includes(id)) {
      setDone(done.filter((lessonId) => lessonId !== id));
    } else {
      setDone([...done, id]);
    }
  };

  const nav = [
    { id: "home", label: "Accueil", icon: Home },
    { id: "lessons", label: "Leçons", icon: GraduationCap },
    { id: "programs", label: "Programmes", icon: Flame },
    { id: "profile", label: "Mon boubou", icon: PawPrint },
    { id: "premium", label: "Premium", icon: Crown },
    { id: "legal", label: "Infos", icon: ShieldCheck },
  ];

  return (
    <div className="app-shell min-h-screen bg-[#f7f1e8] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl bg-[#fbf8f2] shadow-2xl lg:my-6 lg:min-h-[calc(100vh-3rem)] lg:overflow-hidden lg:rounded-[2rem]">
      <aside className="desktop-sidebar hidden w-72 shrink-0 border-r border-black/5 bg-[#101827] p-6 text-white lg:block">
          <Brand />
          <div className="mt-10 space-y-2">
            {nav.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                active={tab === item.id}
                onClick={() => setTab(item.id)}
              />
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-white/10 p-5">
            <Crown className="text-amber-300" />
            <p className="mt-3 font-black">Premium</p>
            <p className="text-sm text-white/60">
              {premiumLessons} leçons avancées pour 1,99 €/mois.
            </p>
            <button
              onClick={() => setPremium(true)}
              className="mt-4 w-full rounded-2xl bg-amber-300 px-4 py-3 text-sm font-black text-slate-950"
            >
              {premium ? 'Activé' : 'Débloquer'}
            </button>
          </div>
        </aside>

        <main className="main-content flex min-h-screen flex-1 flex-col lg:min-h-0">
          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-black/5 bg-[#fbf8f2]/90 px-5 py-4 backdrop-blur lg:px-8">
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-2xl bg-white p-3 shadow-sm lg:hidden"
            >
              <Menu />
            </button>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-700">
                Boubou Coach
              </p>
              <button
  onClick={async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    } else {
      alert("Sur mobile : ouvre le menu du navigateur puis choisis Ajouter à l’écran d’accueil.");
    }
  }}
  className="mt-4 rounded-2xl bg-[#101827] px-5 py-3 text-sm font-black text-white"
>
  Installer l’application
</button>
              <h1 className="text-xl font-black tracking-tight lg:text-3xl">
                Dressage bouledogue français
              </h1>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#101827] text-white">
              <Dog />
            </div>
          </header>

          <section className="flex-1 p-5 pb-28 lg:p-8">
            {tab === 'home' && (
              <HomeScreen
                dogName={dogName}
                setTab={setTab}
                freeLessons={freeLessons}
                premiumLessons={premiumLessons}
                progress={progress}
                premium={premium}
              />
            )}

            {tab === 'lessons' && (
              <LessonsScreen
                lessons={filteredLessons}
                category={category}
                setCategory={setCategory}
                query={query}
                setQuery={setQuery}
                openLesson={openLesson}
                done={done}
                premium={premium}
              />
            )}

{tab === "programs" && (
  <LessonsScreen
    lessons={lessonBank.filter(
      (lesson) => lesson.category === "Plans premium"
    )}
    category="Plans premium"
    setCategory={setCategory}
    query={query}
    setQuery={setQuery}
    openLesson={openLesson}
    done={done}
    premium={premium}
  />
)}

{tab === "profile" && (
  <ProfileScreen
    dogName={dogName}
    setDogName={setDogName}
    dogSex={dogSex}
    setDogSex={setDogSex}
    dogAge={dogAge}
    setDogAge={setDogAge}
    dogWeight={dogWeight}
    setDogWeight={setDogWeight}
    dogGoal={dogGoal}
    setDogGoal={setDogGoal}
    dogPhoto={dogPhoto}
    setDogPhoto={setDogPhoto}
    progress={progress}
    done={done}
    lessons={lessonBank}
  />
)}

            {tab === 'premium' && (
              <PremiumScreen
                premium={premium}
                setPremium={setPremium}
                premiumLessons={premiumLessons}
              />
            )}

{tab === 'legal' && (
  <div className="p-5 lg:p-8">
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-black">
        Mentions légales & Confidentialité
      </h1>

      <div className="prose prose-sm mt-6 max-w-none">
      <h1>Mentions légales – Boubou Coach</h1>

<h2>Éditeur de l’application</h2>
<p>
  Boubou Coach est une application éditée par :
</p>

<p>
  Mathilde Aimard<br />
  France<br />
  Email : contact@bouledogue4ever.fr
</p>

<h2>Hébergement</h2>
<p>
  Vercel Inc.<br />
  340 S Lemon Ave #4133<br />
  Walnut, CA 91789<br />
  États-Unis
</p>

<h2>Propriété intellectuelle</h2>
<p>
  L’ensemble des contenus présents dans l’application Boubou Coach
  (textes, visuels, logos, éléments graphiques, programmes,
  fiches et illustrations) est protégé par le droit d’auteur.
</p>

<p>
  Toute reproduction, diffusion ou exploitation sans autorisation
  préalable est interdite.
</p>

<h1>Conditions Générales d’Utilisation</h1>

<h2>Objet</h2>
<p>
  L’application Boubou Coach propose des contenus éducatifs et
  informatifs autour du dressage et du quotidien du bouledogue français.
</p>

<h2>Utilisation</h2>
<p>
  L’utilisateur s’engage à utiliser l’application dans le respect des
  lois en vigueur.
</p>

<h2>Abonnement Premium</h2>
<p>
  Certaines fonctionnalités et contenus sont accessibles via un
  abonnement premium payant traité par Stripe.
</p>

<h2>Limitation de responsabilité</h2>
<p>
  Les contenus proposés dans l’application sont fournis à titre
  informatif et éducatif.
</p>

<p>
  Ils ne remplacent pas l’accompagnement personnalisé d’un éducateur
  canin professionnel ou d’un vétérinaire.
</p>

<p>
  Chaque chien étant unique, les résultats peuvent varier selon son
  âge, son caractère, son environnement et son état de santé.
</p>

<h1>Politique de confidentialité</h1>

<h2>Données collectées</h2>

<ul>
  <li>Prénom du chien</li>
  <li>Progression des leçons</li>
  <li>Préférences utilisateur</li>
  <li>Informations techniques liées à l’utilisation</li>
</ul>

<h2>Paiement</h2>
<p>
  Les paiements sont sécurisés et traités par Stripe.
</p>

<p>
  Les informations bancaires ne sont jamais stockées par Boubou Coach.
</p>

<h2>Cookies et stockage local</h2>
<p>
  L’application utilise le stockage local du navigateur afin de
  sauvegarder certaines préférences et données de progression.
</p>

<h2>Droits des utilisateurs</h2>
<p>
  Conformément au RGPD, chaque utilisateur peut demander l’accès,
  la modification ou la suppression de ses données.
</p>

<h1>Contact</h1>

<p>
  contact@bouledogue4ever.fr
</p>
<a
  href="mailto:contact@bouledogue4ever.fr"
  className="mt-6 inline-flex items-center rounded-2xl bg-[#101827] px-5 py-3 font-black text-white"
>
  Contacter le support
</a>
      </div>
    </div>
  </div>
)}
          </section>

          <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-black/5 bg-white/95 px-3 py-2 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-md justify-around gap-1">
              {nav.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setTab(item.id)}
                    className={`flex flex-1 min-w-0 flex-col items-center rounded-2xl px-1 py-2 text-[11px] font-bold ${
                      tab === item.id
                        ? 'bg-[#101827] text-white'
                        : 'text-slate-500'
                    }`}
                  >
                    <Icon className="mx-auto mb-1" size={20} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </main>
      </div>

      {menuOpen && (
        <MobileMenu
          nav={nav}
          tab={tab}
          setTab={setTab}
          close={() => setMenuOpen(false)}
        />
      )}

      {selectedLesson && (
        <LessonModal
          lesson={selectedLesson}
          done={done.includes(selectedLesson.id)}
          onClose={() => setSelectedLesson(null)}
          onValidate={() => validateLesson(selectedLesson.id)}
        />
      )}
    </div>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/icon-192.png"
        alt="Boubou Coach"
        className="h-12 w-12 rounded-2xl object-cover"
      />

      <div>
        <p className="text-lg font-black leading-none">Boubou</p>
        <p className="text-sm font-bold text-white/60">Coach</p>
      </div>
    </div>
  );
}

function NavButton({ item, active, onClick }: any) {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
        active
          ? 'bg-white text-slate-950'
          : 'text-white/70 hover:bg-white/10 hover:text-white'
      }`}
    >
      <Icon size={20} />
      {item.label}
    </button>
  );
}

function MobileMenu({ nav, tab, setTab, close }: any) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
      <div className="h-full w-80 bg-[#101827] p-6 text-white">
        <div className="flex items-center justify-around">
          <Brand />
          <button onClick={close}>
            <X />
          </button>
        </div>

        <div className="mt-10 space-y-2">
          {nav.map((item: any) => (
            <NavButton
              key={item.id}
              item={item}
              active={tab === item.id}
              onClick={() => {
                setTab(item.id);
                close();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HomeScreen({
  dogName,
  setTab,
  freeLessons,
  premiumLessons,
  progress,
  premium,
}: any) {
  const today = lessonBank[new Date().getDate() % lessonBank.length];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-[2rem] bg-[#101827] p-7 text-white shadow-xl">
          <span className="rounded-full bg-amber-300 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950">
            Leçon du jour
          </span>
          <h2 className="mt-6 max-w-2xl text-4xl font-black tracking-tight lg:text-5xl">
            Aujourd’hui avec {dogName} : {today.title}
          </h2>
          <p className="mt-4 max-w-xl text-white/70">{today.goal}</p>
          <button
            onClick={() => setTab('lessons')}
            className="mt-6 rounded-2xl bg-amber-300 px-6 py-4 font-black text-slate-950"
          >
            Voir les leçons
          </button>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black">Progression</h3>
            <Trophy className="text-amber-600" />
          </div>

          <div className="mt-6 grid place-items-center">
            <div className="grid h-40 w-40 place-items-center rounded-full bg-[#f7f1e8] text-center">
              <div>
                <p className="text-4xl font-black">{progress}%</p>
                <p className="text-xs font-bold text-slate-500">complété</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <MiniStat
              icon={BookOpen}
              label="Leçons gratuites"
              value={freeLessons}
            />
            <MiniStat
              icon={Crown}
              label="Leçons premium"
              value={premiumLessons}
            />
            <MiniStat
              icon={Star}
              label="Statut"
              value={premium ? 'Premium' : 'Gratuit'}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <InfoCard
          icon={Target}
          title="Méthode douce"
          text="Des exercices courts, sans cris, pensés pour le caractère du bouledogue."
        />
        <InfoCard
          icon={Clock3}
          title="5 à 15 minutes"
          text="Chaque leçon peut être faite sans bloquer ta journée."
        />
        <InfoCard
          icon={Sparkles}
          title="Contenu premium"
          text="Les vrais problèmes du quotidien sont dans les programmes avancés."
        />
      </div>
    </div>
  );
}

function LessonsScreen({
  lessons,
  category,
  setCategory,
  query,
  setQuery,
  openLesson,
  done,
  premium,
}: any) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <h2 className="text-3xl font-black">Bibliothèque de leçons</h2>
          <p className="mt-2 text-slate-600">
            10 leçons gratuites, puis 50 leçons premium détaillées pour les
            problèmes du quotidien.
          </p>
        </div>

        <div className="relative">
          <Search
            className="absolute left-4 top-3.5 text-slate-400"
            size={18}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une leçon..."
            className="w-full rounded-2xl border border-black/10 bg-white py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-amber-300 xl:w-80"
          />
        </div>
      </div>

      <div className="category-scroll flex gap-2 overflow-x-auto pb-3 pr-10 scrollbar-hide">
      <button
  onClick={() => setCategory("Plans premium")}
  className="rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-slate-950"
>
  🔥 Programmes
</button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-black ${
              category === cat
                ? 'bg-[#101827] text-white'
                : 'bg-white text-slate-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-2">
        {lessons.map((lesson: Lesson) => {
          const locked = !lesson.free && !premium;
          const isDone = done.includes(lesson.id);

          return (
            <button
              key={lesson.id}
              onClick={() => openLesson(lesson)}
              className="group rounded-[1.7rem] bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {lesson.free ? (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                      Gratuit
                    </span>
                  ) : (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">
                      Premium
                    </span>
                  )}

                  <h3 className="mt-4 text-xl font-black leading-tight">
                    {lesson.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {lesson.category} · {lesson.duration}
                  </p>
                </div>

                <div
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${
                    locked
                      ? 'bg-slate-100 text-slate-400'
                      : isDone
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-[#101827] text-white'
                  }`}
                >
                  {locked ? <Lock /> : isDone ? <CheckCircle2 /> : <BookOpen />}
                </div>
              </div>

              <p className="mt-4 line-clamp-3 text-sm text-slate-600">
                {lesson.goal}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LessonModal({ lesson, done, onClose, onValidate }: any) {
  return (
    <div
      className="fixed inset-0 z-50 bg-white"
      style={{
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
      }}
      onWheelCapture={(e) => {
        e.currentTarget.scrollTop += e.deltaY;
      }}
    >
      <div className="min-h-screen">
        <div className="mx-auto w-full max-w-4xl p-5 pb-10 sm:p-8">
          <div className="sticky top-0 z-10 -mx-5 mb-6 flex items-start justify-between gap-4 border-b border-black/5 bg-white/95 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-700">
                {lesson.category}
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                {lesson.title}
              </h2>
              <p className="mt-2 text-sm font-bold text-slate-500">
                {lesson.level} · {lesson.duration} ·{' '}
                {lesson.free ? 'Gratuit' : 'Premium'}
              </p>
            </div>

            <button onClick={onClose} className="rounded-2xl bg-[#f7f1e8] p-3">
              <X size={20} />
            </button>
          </div>

          <div className="rounded-3xl bg-[#101827] p-5 text-white">
            <div className="flex items-center gap-2 text-amber-200">
              <Target size={18} />
              <p className="text-sm font-black">Objectif</p>
            </div>
            <p className="mt-2 text-white/80">{lesson.goal}</p>
          </div>

          <div className="mt-6 rounded-3xl bg-[#f7f1e8] p-5 text-slate-700">
            <div className="flex items-center gap-2 text-slate-950">
              <Heart size={18} />
              <h3 className="font-black">Introduction</h3>
            </div>
            <p className="mt-2">{lesson.intro}</p>
          </div>

          <LessonBlock
            icon={Lightbulb}
            title="Pourquoi c’est important"
            items={[lesson.why]}
          />
          <LessonBlock
            icon={ListChecks}
            title="Avant de commencer"
            items={lesson.before}
          />
          <LessonBlock
            icon={BookOpen}
            title="Progression conseillée"
            items={lesson.progress}
          />

          <div className="mt-6">
            <h3 className="text-xl font-black">Étapes de la séance</h3>
            <div className="mt-3 space-y-3">
              {lesson.steps.map((step: string, index: number) => (
                <div
                  key={step}
                  className="flex gap-3 rounded-2xl bg-[#fbf8f2] p-4"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-amber-300 text-sm font-black">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <LessonBlock
            icon={ShieldCheck}
            title="Signes que ça fonctionne"
            items={lesson.success}
          />

          <div className="mt-6 rounded-3xl bg-rose-50 p-5">
            <div className="flex items-center gap-2 text-rose-900">
              <AlertTriangle size={18} />
              <h3 className="font-black">Erreurs à éviter</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-rose-900/80">
              {lesson.mistakes.map((mistake: string) => (
                <li key={mistake}>• {mistake}</li>
              ))}
            </ul>
          </div>


          <LessonBlock
            icon={Wrench}
            title="Si ça ne marche pas"
            items={lesson.troubleshooting}
          />

          <div className="mt-6 rounded-3xl bg-emerald-50 p-5">
            <div className="flex items-center gap-2 text-emerald-800">
              <Flame size={18} />
              <h3 className="font-black">Exercice à faire</h3>
            </div>
            <p className="mt-2 text-sm font-semibold text-emerald-900/80">
              {lesson.homework}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
  onClick={onValidate}
  style={{
    backgroundColor: done ? "#059669" : "#101827",
    color: "white",
    display: "block",
  }}
  className="flex-1 rounded-2xl px-5 py-4 font-black transition"
>
  {done ? "Retirer la validation" : "Valider la leçon"}
</button>

  <button
    onClick={onClose}
    className="flex-1 rounded-2xl bg-[#f7f1e8] px-5 py-4 font-black text-slate-800"
  >
    Fermer
  </button>
</div>
        </div>
      </div>
    </div>
  );
}
function LessonBlock({
  icon: Icon,
  title,
  items,
}: {
  icon: any;
  title: string;
  items?: string[];
}) {
  if (!items?.length) return null;

  return (
    <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-slate-950">
        <Icon size={18} className="text-amber-700" />
        <h3 className="font-black">{title}</h3>
      </div>

      <div className="mt-3 space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#f7f1e8] p-4 text-sm font-semibold text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
function ProfileScreen({
  dogName,
  setDogName,
  dogSex,
  setDogSex,
  dogAge,
  setDogAge,
  dogWeight,
  setDogWeight,
  dogGoal,
  setDogGoal,
  dogPhoto,
  setDogPhoto,
  progress,
  done,
  lessons,
}: any) {
  const doneLessons = lessons.filter((lesson: Lesson) => done.includes(lesson.id));

  const categoryStats = Array.from(
    new Set(lessons.map((lesson: Lesson) => lesson.category))
  ).map((cat) => {
    const total = lessons.filter((lesson: Lesson) => lesson.category === cat).length;
    const completed = lessons.filter(
      (lesson: Lesson) => lesson.category === cat && done.includes(lesson.id)
    ).length;

    return {
      category: cat,
      total,
      completed,
      percent: Math.round((completed / total) * 100),
    };
  });

  const badges = [
    {
      title: "Première patte",
      text: "1 leçon validée",
      unlocked: done.length >= 1,
    },
    {
      title: "Routine lancée",
      text: "3 leçons validées",
      unlocked: done.length >= 3,
    },
    {
      title: "Boubou studieux",
      text: "10 leçons validées",
      unlocked: done.length >= 10,
    },
    {
      title: "Coach confirmé",
      text: "25 leçons validées",
      unlocked: done.length >= 25,
    },
    {
      title: "Maître du calme",
      text: "50 leçons validées",
      unlocked: done.length >= 50,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <div className="grid place-items-center text-center">
          <div className="relative">
  {dogPhoto ? (
    <img
      src={dogPhoto}
      alt={dogName}
      className="h-32 w-32 rounded-[2rem] object-cover"
    />
  ) : (
    <div className="grid h-32 w-32 place-items-center rounded-[2rem] bg-amber-100 text-amber-800">
      <Dog size={56} />
    </div>
  )}
</div>

            <h2 className="mt-4 text-3xl font-black">{dogName}</h2>
            <p className="text-slate-500">Bouledogue français</p>
          </div>

          <label className="mt-6 block">
            <span className="text-sm font-black">Prénom</span>
            <input
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300"
            />
          </label>
          <div className="mt-4 grid gap-4">
          <label>
  <span className="text-sm font-black">Photo du chien</span>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setDogPhoto(imageUrl);
      }
    }}
    className="mt-2 block w-full text-sm"
  />
</label>

  <label>
    <span className="text-sm font-black">Sexe</span>
    <select
      value={dogSex}
      onChange={(e) => setDogSex(e.target.value)}
      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none"
    >
      <option>Mâle</option>
      <option>Femelle</option>
    </select>
  </label>

  <label>
    <span className="text-sm font-black">Âge</span>
    <input
      value={dogAge}
      onChange={(e) => setDogAge(e.target.value)}
      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none"
    />
  </label>

  <label>
    <span className="text-sm font-black">Poids</span>
    <input
      value={dogWeight}
      onChange={(e) => setDogWeight(e.target.value)}
      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none"
    />
  </label>

  <label>
    <span className="text-sm font-black">Objectif principal</span>
    <input
      value={dogGoal}
      onChange={(e) => setDogGoal(e.target.value)}
      className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fbf8f2] px-4 py-3 outline-none"
    />
  </label>
</div>
        </div>

        <div className="rounded-[2rem] bg-[#101827] p-6 text-white">
          <h3 className="text-2xl font-black">Progression globale</h3>

          <p className="mt-2 text-white/70">
            {done.length} leçons validées sur {lessons.length}.
          </p>

          <div className="mt-5 h-4 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-amber-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white/10 p-3">
              <p className="text-2xl font-black">{progress}%</p>
              <p className="text-xs text-white/60">complété</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-3">
              <p className="text-2xl font-black">{done.length}</p>
              <p className="text-xs text-white/60">validées</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-3">
              <p className="text-2xl font-black">{lessons.length - done.length}</p>
              <p className="text-xs text-white/60">restantes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-black">Progression par catégorie</h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {categoryStats.map((stat) => (
            <div key={stat.category} className="rounded-3xl bg-[#fbf8f2] p-5">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-black">{stat.category}</h4>
                <span className="text-sm font-black text-slate-500">
                  {stat.completed}/{stat.total}
                </span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-black/10">
                <div
                  className="h-full rounded-full bg-amber-300"
                  style={{ width: `${stat.percent}%` }}
                />
              </div>

              <p className="mt-2 text-sm font-bold text-slate-500">
                {stat.percent}% terminé
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black">Badges débloqués</h3>

          <div className="mt-5 grid gap-3">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className={`flex items-center gap-3 rounded-3xl p-4 ${
                  badge.unlocked
                    ? "bg-amber-100 text-slate-950"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                <div
                  className={`grid h-11 w-11 place-items-center rounded-2xl ${
                    badge.unlocked ? "bg-amber-300" : "bg-slate-200"
                  }`}
                >
                  <Trophy size={22} />
                </div>

                <div>
                  <p className="font-black">{badge.title}</p>
                  <p className="text-sm font-semibold opacity-70">{badge.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black">Dernières leçons validées</h3>

          {doneLessons.length === 0 ? (
            <p className="mt-4 text-slate-500">
              Aucune leçon validée pour le moment.
            </p>
          ) : (
            <div className="mt-5 space-y-3">
              {doneLessons.slice(-5).reverse().map((lesson: Lesson) => (
                <div
                  key={lesson.id}
                  className="rounded-3xl bg-[#fbf8f2] p-4"
                >
                  <p className="font-black">{lesson.title}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    {lesson.category} · {lesson.duration}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PremiumScreen({ premium, setPremium, premiumLessons }: any) {
  const features = [
    `${premiumLessons} leçons premium détaillées`,
    'Programmes solitude, aboiements, laisse et rappel',
    'Plans 7, 14 et 30 jours',
    'Exercices concrets à faire chaque jour',
    'Suivi de progression',
    'Accès aux contenus avancés',
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-[2.3rem] bg-[#101827] p-7 text-center text-white shadow-xl lg:p-10">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-amber-300 text-slate-950">
          <Crown size={34} />
        </div>

        <h2 className="mt-6 text-4xl font-black tracking-tight lg:text-5xl">
          Boubou Coach Premium
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Débloque {premiumLessons} leçons avancées pour mieux gérer les vrais
          problèmes du quotidien : aboiements, solitude, promenade, excitation
          et rappel.
        </p>

        <div className="mt-8 inline-flex items-end gap-2 rounded-3xl bg-white px-6 py-4 text-slate-950">
          <span className="text-5xl font-black">1,99 €</span>
          <span className="pb-2 font-bold text-slate-500">/ mois</span>
        </div>

          <div className="mt-4 space-y-2">
          <a
            href="https://buy.stripe.com/5kQfZj7Ivd1v2NpciX1wY03"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl bg-amber-300 px-4 py-3 text-center text-sm font-black text-slate-950"
          >
            Débloquer Premium
          </a>
        
          <button
            onClick={() => {
              const code = prompt("Entre ton code premium");
        
              if (code?.trim().toUpperCase() === "BOUBOU2026") {
                setPremium(true);
                alert("Premium activé 🎉");
              } else {
                alert("Code incorrect");
              }
            }}
            className="w-full rounded-2xl border border-white/20 px-4 py-3 text-sm font-bold text-white"
          >
            J’ai un code premium
          </button>
        </div>
    
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 rounded-3xl bg-white p-5 shadow-sm"
          >
            <CheckCircle2 className="shrink-0 text-emerald-600" />
            <p className="font-bold">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#fbf8f2] p-3">
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-amber-700" />
        <span className="text-sm font-bold text-slate-500">{label}</span>
      </div>
      <span className="text-sm font-black">{value}</span>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }: any) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <Icon className="text-amber-700" />
      <h3 className="mt-4 text-xl font-black">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}
