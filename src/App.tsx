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
    
      {
        id: "premium-11",
        free: false,
        category: "Stop aboiements",
        title: "Identifier le déclencheur des aboiements",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Comprendre pourquoi ton chien aboie avant de chercher à arrêter le comportement.",
        intro: "Un aboiement n’a pas toujours la même cause. Ton bouledogue peut aboyer par alerte, peur, excitation, frustration, demande d’attention ou simple habitude.",
        why: "Si tu ne connais pas la cause, tu risques d’utiliser la mauvaise solution. Un aboiement de peur ne se travaille pas comme un aboiement de demande ou d’excitation.",
        before: [
          "Observe sans intervenir pendant quelques situations.",
          "Note l’heure, le lieu et ce qui se passe juste avant.",
          "Regarde son corps : tendu, joyeux, inquiet ou frustré.",
          "Évite de crier immédiatement.",
          "Choisis un seul type d’aboiement à travailler."
        ],
        progress: [
          "Jour 1 : noter les aboiements sans chercher à corriger.",
          "Jour 2 : classer les déclencheurs principaux.",
          "Jour 3 : repérer les moments où il est encore récupérable.",
          "Jour 4 : tester une redirection simple.",
          "Jour 5 : garder uniquement la stratégie qui fonctionne le mieux."
        ],
        steps: [
          "Note ce qui arrive juste avant l’aboiement.",
          "Classe le déclencheur : bruit, personne, chien, ennui, demande ou peur.",
          "Observe si ton chien peut encore te regarder.",
          "Interviens avant que l’aboiement monte trop fort.",
          "Récompense le calme ou le retour vers toi."
        ],
        success: [
          "Tu identifies les situations qui déclenchent le plus.",
          "Tu interviens plus tôt.",
          "Ton chien récupère plus vite après avoir aboyé.",
          "Les aboiements deviennent plus prévisibles.",
          "Tu sais quelle stratégie tester."
        ],
        mistakes: [
          "Traiter tous les aboiements pareil.",
          "Crier, ce qui ajoute du bruit au bruit.",
          "Récompenser sans le vouloir les aboiements de demande.",
          "Intervenir seulement quand il est déjà trop haut.",
          "Changer de stratégie tous les jours."
        ],
        troubleshooting: [
          "S’il aboie dès le moindre bruit, commence par réduire les stimulations.",
          "S’il aboie pour demander, attends une micro-pause de silence.",
          "S’il aboie par peur, augmente la distance avec le déclencheur.",
          "S’il aboie par excitation, travaille le retour au calme.",
          "S’il aboie longtemps, choisis des séances plus courtes et plus faciles."
        ],
        homework: "Pendant 3 jours, note les 5 aboiements les plus fréquents avec leur déclencheur."
      },
      {
        id: "premium-12",
        free: false,
        category: "Stop aboiements",
        title: "Aboiements à la fenêtre",
        level: "Intermédiaire",
        duration: "12 min",
        goal: "Réduire les aboiements déclenchés par les passants, voitures ou chiens visibles dehors.",
        intro: "La fenêtre peut devenir un vrai poste de surveillance. Chaque passant qui disparaît peut renforcer l’idée que ton chien a réussi à le faire partir.",
        why: "Plus ton bouledogue surveille, plus il s’entraîne à réagir. Il faut donc réduire l’accès au déclencheur tout en lui apprenant à revenir vers toi.",
        before: [
          "Repère les heures où il surveille le plus.",
          "Prépare des récompenses près de la zone.",
          "Limite l’accès visuel au début.",
          "Travaille avant qu’il aboie fort.",
          "Prévois une zone calme loin de la fenêtre."
        ],
        progress: [
          "Jour 1 : limiter la surveillance libre.",
          "Jour 2 : rappeler avant l’aboiement.",
          "Jour 3 : récompenser le retour vers toi.",
          "Jour 4 : ajouter une zone calme après le rappel.",
          "Jour 5 : réintroduire la fenêtre sur de courtes durées."
        ],
        steps: [
          "Observe quand il commence à fixer dehors.",
          "Appelle-le avant le premier aboiement si possible.",
          "Récompense dès qu’il quitte la fenêtre.",
          "Propose une activité calme ailleurs.",
          "Réduis progressivement les moments de surveillance."
        ],
        success: [
          "Il quitte la fenêtre plus facilement.",
          "Il aboie moins longtemps.",
          "Il répond mieux à ton rappel.",
          "Il surveille moins en continu.",
          "Il se pose plus vite après un passage dehors."
        ],
        mistakes: [
          "Le laisser surveiller toute la journée.",
          "Attendre qu’il aboie fort pour intervenir.",
          "Le tirer brusquement loin de la fenêtre.",
          "Crier depuis une autre pièce.",
          "Ouvrir la fenêtre ou le volet quand il est déjà excité."
        ],
        troubleshooting: [
          "S’il retourne immédiatement à la fenêtre, occupe-le ailleurs.",
          "S’il ignore le rappel, commence plus loin du déclencheur.",
          "S’il aboie déjà fort, cache la vue puis attends le calme.",
          "S’il surveille toute la journée, bloque partiellement l’accès visuel.",
          "S’il progresse, augmente très lentement le temps avec vue."
        ],
        homework: "Travaille 5 rappels loin de la fenêtre par jour pendant une semaine."
      },
      {
        id: "premium-13",
        free: false,
        category: "Stop aboiements",
        title: "Aboiements aux bruits du voisinage",
        level: "Intermédiaire",
        duration: "12 min",
        goal: "Aider ton chien à moins réagir aux portes, pas, ascenseur ou voix dans l’immeuble.",
        intro: "Les bruits invisibles peuvent être très difficiles pour un chien. Il entend quelque chose, mais ne voit pas toujours ce qui se passe.",
        why: "Ton chien peut penser qu’il doit gérer les bruits lui-même. Le but est de lui apprendre que ces sons existent, mais qu’ils ne nécessitent pas une réaction forte.",
        before: [
          "Repère les sons les plus déclencheurs.",
          "Prépare des friandises faciles à donner rapidement.",
          "Garde une attitude normale.",
          "Ne te précipite pas vers la porte avec lui.",
          "Commence avec des bruits faibles si possible."
        ],
        progress: [
          "Jour 1 : associer petits bruits et récompenses.",
          "Jour 2 : récompenser le regard vers toi après un bruit.",
          "Jour 3 : ajouter le panier après un bruit.",
          "Jour 4 : travailler sur des sons un peu plus fréquents.",
          "Jour 5 : réduire progressivement les récompenses."
        ],
        steps: [
          "Dès qu’un bruit faible apparaît, dis calmement “oui”.",
          "Donne une récompense avant qu’il monte trop en aboiement.",
          "S’il aboie, attends une micro-pause de silence.",
          "Récompense cette pause.",
          "Propose ensuite le panier ou une activité calme."
        ],
        success: [
          "Il aboie moins vite au premier bruit.",
          "Il te regarde après certains sons.",
          "Il récupère plus vite.",
          "Il va plus facilement dans sa zone calme.",
          "Les bruits deviennent moins explosifs."
        ],
        mistakes: [
          "Se précipiter vers la porte avec lui.",
          "Dire “chut” sans proposer quoi faire.",
          "Travailler uniquement quand le bruit est déjà trop fort.",
          "S’énerver à chaque son.",
          "Récompenser uniquement quand il est déjà très excité."
        ],
        troubleshooting: [
          "S’il aboie trop vite, travaille avec des sons enregistrés plus faibles.",
          "S’il refuse la friandise, augmente la distance avec la porte.",
          "S’il court vers l’entrée, bloque l’accès temporairement.",
          "S’il se calme une seconde, récompense immédiatement.",
          "S’il progresse, garde plusieurs jours faciles avant de compliquer."
        ],
        homework: "Associe 10 petits bruits par jour à une récompense calme."
      },
      {
        id: "premium-14",
        free: false,
        category: "Stop aboiements",
        title: "Aboiements de demande d’attention",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Réduire les aboiements utilisés pour obtenir jeu, nourriture, canapé ou attention.",
        intro: "Certains bouledogues comprennent très vite qu’un aboiement attire l’attention. Même un “non” peut devenir une récompense si le chien cherche à te faire réagir.",
        why: "Si ton chien aboie et obtient ce qu’il veut, le comportement se renforce. Il faut donc lui apprendre une autre manière de demander.",
        before: [
          "Identifie ce qu’il cherche vraiment.",
          "Décide d’une alternative : assis, regard, panier ou silence.",
          "Préviens les personnes de la maison pour rester cohérents.",
          "Ne commence pas quand il est déjà très frustré.",
          "Prépare des récompenses pour les demandes calmes."
        ],
        progress: [
          "Jour 1 : repérer les demandes les plus fréquentes.",
          "Jour 2 : attendre une micro-pause de silence.",
          "Jour 3 : demander une alternative simple.",
          "Jour 4 : récompenser seulement les demandes calmes.",
          "Jour 5 : appliquer la même règle dans plusieurs situations."
        ],
        steps: [
          "Quand il aboie pour demander, reste neutre.",
          "Attends une seconde de silence.",
          "Demande un comportement simple comme “assis”.",
          "Récompense si la demande est appropriée.",
          "Si la demande n’est pas possible, redirige vers une autre activité."
        ],
        success: [
          "Il aboie moins pour obtenir quelque chose.",
          "Il propose davantage un assis ou un regard.",
          "Il se calme plus vite quand tu ne réponds pas à l’aboiement.",
          "Les demandes deviennent plus faciles à gérer.",
          "Toute la maison applique la même règle."
        ],
        mistakes: [
          "Donner la friandise pendant qu’il aboie.",
          "Le regarder intensément à chaque aboiement.",
          "Céder parfois et refuser parfois sans cohérence.",
          "Parler beaucoup pendant l’aboiement.",
          "Attendre qu’il s’énerve trop avant d’agir."
        ],
        troubleshooting: [
          "S’il aboie plus fort au début, reste cohérente : c’est fréquent.",
          "S’il se frustre trop, propose une alternative plus simple.",
          "S’il demande un vrai besoin, réponds calmement après silence.",
          "S’il recommence souvent, vérifie qu’il a assez d’activité.",
          "S’il progresse, récompense rapidement les demandes calmes."
        ],
        homework: "Choisis une demande fréquente et impose la même alternative pendant 7 jours."
      },
      {
        id: "premium-15",
        free: false,
        category: "Stop aboiements",
        title: "Quand quelqu’un sonne à la porte",
        level: "Avancé",
        duration: "15 min",
        goal: "Transformer la sonnette en signal de retour au panier plutôt qu’en explosion.",
        intro: "La sonnette annonce souvent un événement très excitant : une personne arrive. Ton chien peut donc associer ce son à une montée d’émotion immédiate.",
        why: "On ne peut pas demander un calme parfait d’un coup. Il faut créer une nouvelle routine : sonnerie, panier, récompense, ouverture contrôlée.",
        before: [
          "Entraîne d’abord le panier sans sonnette.",
          "Prépare une récompense de grande valeur.",
          "Utilise un son de sonnette enregistré au début.",
          "Demande l’aide d’une personne complice plus tard.",
          "Ne commence pas lors d’une vraie visite importante."
        ],
        progress: [
          "Jour 1 : son faible + récompense.",
          "Jour 2 : son faible + panier.",
          "Jour 3 : son plus réaliste + panier.",
          "Jour 4 : personne complice derrière la porte.",
          "Jour 5 : vraie entrée mais très contrôlée."
        ],
        steps: [
          "Fais sonner un son faible ou enregistré.",
          "Guide ton chien vers le panier.",
          "Récompense même s’il reste un peu excité.",
          "Répète plusieurs fois sans ouvrir la porte.",
          "Ajoute ensuite une vraie personne complice."
        ],
        success: [
          "Il court moins directement à la porte.",
          "Il comprend que la sonnette annonce le panier.",
          "Il aboie moins longtemps.",
          "Il récupère plus vite après le son.",
          "L’ouverture de la porte devient plus contrôlée."
        ],
        mistakes: [
          "Commencer directement avec un invité réel.",
          "Ouvrir pendant qu’il hurle et saute.",
          "Demander un silence parfait dès le départ.",
          "Faire trop de répétitions d’un coup.",
          "Gronder alors qu’il est déjà débordé."
        ],
        troubleshooting: [
          "S’il explose au son, baisse le volume.",
          "S’il ne va pas au panier, retravaille le panier seul.",
          "S’il revient à la porte, récompense plus souvent au panier.",
          "S’il aboie encore, récompense d’abord les pauses de silence.",
          "S’il progresse, ajoute la vraie porte très progressivement."
        ],
        homework: "Fais 3 répétitions par jour avec un son de sonnette faible."
      },
      {
        id: "premium-16",
        free: false,
        category: "Rappel avancé",
        title: "Commencer le rappel dehors en longe",
        level: "Intermédiaire",
        duration: "12 min",
        goal: "Travailler le rappel dehors en sécurité, sans détacher trop tôt.",
        intro: "La longe est l’étape idéale entre la maison et la liberté totale. Elle permet à ton chien d’explorer tout en gardant une sécurité.",
        why: "Détacher trop tôt peut créer des échecs dangereux. La longe permet d’entraîner le rappel dans la vraie vie sans perdre le contrôle.",
        before: [
          "Utilise une longe adaptée et solide.",
          "Choisis un lieu calme et ouvert.",
          "Prépare de très bonnes récompenses.",
          "Ne tends pas la longe en permanence.",
          "Évite les zones avec chiens trop proches au début."
        ],
        progress: [
          "Jour 1 : rappels très courts en longe.",
          "Jour 2 : laisser explorer puis rappeler.",
          "Jour 3 : ajouter une légère distraction.",
          "Jour 4 : varier les distances.",
          "Jour 5 : relâcher après chaque rappel pour garder la motivation."
        ],
        steps: [
          "Laisse ton chien explorer sans tension.",
          "Appelle quand il n’est pas totalement absorbé.",
          "Recule légèrement pour l’encourager.",
          "Récompense fortement quand il revient.",
          "Relâche-le ensuite pour explorer à nouveau."
        ],
        success: [
          "Il revient plus volontiers dehors.",
          "Il ne voit pas le rappel comme une punition.",
          "Il accepte de quitter certaines odeurs.",
          "Il garde plus de connexion.",
          "Tu peux travailler en sécurité."
        ],
        mistakes: [
          "Appeler dans une distraction trop forte.",
          "Rattacher ou rentrer après chaque rappel.",
          "Tirer la longe au lieu d’apprendre.",
          "Faire trop de répétitions.",
          "Utiliser une récompense trop faible."
        ],
        troubleshooting: [
          "S’il ignore l’appel, réduis la distance.",
          "S’il revient lentement, récompense quand même.",
          "S’il tire sur la longe, attends un moment plus calme.",
          "S’il est trop distrait, change de lieu.",
          "S’il réussit bien, garde des rappels faciles."
        ],
        homework: "Fais 5 rappels en longe par sortie, toujours faciles au début."
      },
      {
        id: "premium-17",
        free: false,
        category: "Rappel avancé",
        title: "Augmenter les distractions",
        level: "Avancé",
        duration: "14 min",
        goal: "Renforcer le rappel lorsque l’environnement devient plus intéressant.",
        intro: "Un rappel réussi dans le salon ne garantit pas un rappel réussi dehors. Il faut ajouter les distractions une par une, sans brûler les étapes.",
        why: "Chaque distraction augmente la difficulté. Si tu vas trop vite, tu apprends surtout à ton chien qu’il peut ignorer le rappel.",
        before: [
          "Travaille avec une longe.",
          "Choisis une seule distraction à la fois.",
          "Garde des récompenses très fortes.",
          "Appelle avant qu’il soit totalement absorbé.",
          "Accepte de revenir en arrière si besoin."
        ],
        progress: [
          "Étape 1 : rappel dans un lieu déjà connu.",
          "Étape 2 : ajouter une odeur intéressante.",
          "Étape 3 : ajouter une personne au loin.",
          "Étape 4 : ajouter un chien visible de loin.",
          "Étape 5 : varier les lieux tout en gardant la sécurité."
        ],
        steps: [
          "Commence dans un lieu où ton chien réussit déjà.",
          "Ajoute une distraction faible.",
          "Appelle avant qu’il soit trop fixé.",
          "Récompense avec une friandise de grande valeur.",
          "Si l’échec arrive, baisse immédiatement la difficulté."
        ],
        success: [
          "Il revient malgré une petite distraction.",
          "Il récupère plus vite son attention.",
          "Il hésite moins avant de revenir.",
          "Il réussit dans plusieurs lieux.",
          "Tu sais mieux évaluer la difficulté."
        ],
        mistakes: [
          "Tester au parc bondé trop vite.",
          "Se fâcher s’il ne revient pas.",
          "Ne pas adapter la récompense à la difficulté.",
          "Répéter le rappel dix fois.",
          "Supprimer la longe trop tôt."
        ],
        troubleshooting: [
          "S’il échoue, la distraction était trop forte.",
          "S’il regarde mais ne vient pas, recule en l’encourageant.",
          "S’il refuse la friandise, augmente la distance.",
          "S’il revient une fois puis décroche, arrête la séance.",
          "S’il progresse, reste plusieurs jours au même niveau."
        ],
        homework: "Choisis une seule distraction à travailler cette semaine."
      },
      {
        id: "premium-18",
        free: false,
        category: "Rappel avancé",
        title: "Créer un rappel d’urgence",
        level: "Avancé",
        duration: "10 min",
        goal: "Créer un mot spécial réservé aux situations importantes.",
        intro: "Le rappel d’urgence est un mot rare, très positif et très récompensé. Il ne doit pas servir pour rentrer du parc tous les jours.",
        why: "Ce mot doit garder une valeur exceptionnelle. Plus il est utilisé pour des situations banales, plus il perd de sa force.",
        before: [
          "Choisis un mot unique que tu n’utilises jamais.",
          "Prépare une récompense exceptionnelle.",
          "Travaille d’abord à la maison.",
          "Ne l’utilise jamais pour gronder.",
          "Ne le répète pas plusieurs fois."
        ],
        progress: [
          "Jour 1 : mot spécial + jackpot à la maison.",
          "Jour 2 : mot spécial à 1 mètre.",
          "Jour 3 : mot spécial dans une autre pièce.",
          "Jour 4 : mot spécial dans le jardin ou couloir.",
          "Jour 5 : une seule répétition dehors en lieu calme."
        ],
        steps: [
          "Dis le mot spécial avec enthousiasme.",
          "Donne immédiatement une récompense exceptionnelle.",
          "Ne demande rien d’autre au début.",
          "Ajoute ensuite une courte distance.",
          "Garde ce mot pour les situations importantes."
        ],
        success: [
          "Ton chien réagit fortement au mot.",
          "Il revient avec enthousiasme.",
          "Il associe ce rappel à une énorme récompense.",
          "Tu ne l’utilises pas pour des situations banales.",
          "Le mot garde une valeur spéciale."
        ],
        mistakes: [
          "Utiliser le mot trop souvent.",
          "L’utiliser pour gronder.",
          "Récompenser avec une simple croquette au début.",
          "Le dire plusieurs fois d’affilée.",
          "L’utiliser pour mettre fin à tous les plaisirs."
        ],
        troubleshooting: [
          "S’il ne réagit pas, change de récompense.",
          "S’il revient lentement, retravaille à plus courte distance.",
          "S’il entend trop souvent le mot, choisis-en un nouveau.",
          "S’il hésite dehors, reprends à la maison.",
          "S’il réussit, protège ce mot et utilise-le rarement."
        ],
        homework: "Pendant 7 jours, fais 2 associations par jour : mot spécial + jackpot."
      },
      {
        id: "premium-19",
        free: false,
        category: "Rappel avancé",
        title: "Rappel quand il renifle",
        level: "Intermédiaire",
        duration: "12 min",
        goal: "Lui apprendre à quitter une odeur pour revenir vers toi.",
        intro: "Pour beaucoup de bouledogues, les odeurs sont plus fortes que les friandises. Il faut donc utiliser l’odeur comme une récompense possible.",
        why: "Si revenir signifie perdre l’accès à l’odeur, ton chien aura moins envie de revenir. Si revenir lui permet parfois de retourner renifler, le rappel devient moins frustrant.",
        before: [
          "Travaille en longe.",
          "Choisis une zone avec des odeurs modérées.",
          "Prépare une récompense forte.",
          "Attends le bon moment pour appeler.",
          "Prévois de le renvoyer parfois renifler."
        ],
        progress: [
          "Jour 1 : appeler quand il relève déjà la tête.",
          "Jour 2 : appeler après quelques secondes de reniflage.",
          "Jour 3 : récompenser puis renvoyer renifler.",
          "Jour 4 : travailler sur plusieurs odeurs faciles.",
          "Jour 5 : augmenter légèrement la difficulté."
        ],
        steps: [
          "Laisse-le renifler quelques secondes.",
          "Appelle quand il lève légèrement la tête.",
          "Récompense son retour.",
          "Renvoie-le renifler avec “vas-y”.",
          "Répète sur des odeurs pas trop difficiles."
        ],
        success: [
          "Il quitte une odeur plus facilement.",
          "Il revient sans frustration excessive.",
          "Il comprend que revenir ne stoppe pas tout plaisir.",
          "Il répond mieux en promenade.",
          "Tu récupères son attention plus vite."
        ],
        mistakes: [
          "Appeler quand il est totalement absorbé.",
          "Interdire de retourner renifler après le rappel.",
          "Tirer sur la longe au lieu d’attendre le bon moment.",
          "Utiliser une récompense faible.",
          "Faire trop de répétitions sur la même odeur."
        ],
        troubleshooting: [
          "S’il ne revient pas, attends un moment moins intense.",
          "S’il revient puis repart trop vite, récompense plus près de toi.",
          "S’il ignore tout, change de zone.",
          "S’il se frustre, renvoie-le plus souvent renifler.",
          "S’il réussit bien, garde des rappels faciles pour renforcer."
        ],
        homework: "Fais 5 rappels-reniflage par balade pendant 5 jours."
      },
      {
        id: "premium-20",
        free: false,
        category: "Rappel avancé",
        title: "Jeu du rappel à plusieurs personnes",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Rendre le rappel ludique et renforcer la vitesse de retour.",
        intro: "Le jeu du ping-pong est parfait pour les chiens qui reviennent lentement ou sans enthousiasme. Il transforme le rappel en moment amusant.",
        why: "Plus le rappel est joyeux, plus le chien a envie de revenir. Ce jeu augmente la motivation sans pression.",
        before: [
          "Choisis deux personnes calmes.",
          "Travaille dans un lieu fermé ou sécurisé.",
          "Prépare de petites récompenses.",
          "Commence à courte distance.",
          "Arrête avant que le chien se lasse."
        ],
        progress: [
          "Étape 1 : deux personnes à 2 mètres.",
          "Étape 2 : augmenter à 4 mètres.",
          "Étape 3 : ajouter un changement de pièce.",
          "Étape 4 : faire le jeu dehors en lieu clos.",
          "Étape 5 : réduire progressivement les friandises."
        ],
        steps: [
          "Deux personnes se placent à quelques mètres.",
          "La première appelle le chien.",
          "Elle récompense quand il arrive.",
          "La deuxième attend quelques secondes puis appelle à son tour.",
          "Arrête après quelques réussites."
        ],
        success: [
          "Ton chien court plus vite vers les personnes.",
          "Il répond avec plus de joie.",
          "Il comprend mieux le mot de rappel.",
          "Il reste motivé pendant l’exercice.",
          "Il réussit sans avoir besoin d’être appelé plusieurs fois."
        ],
        mistakes: [
          "Appeler en même temps.",
          "Faire trop de répétitions.",
          "Jouer quand le chien est déjà épuisé.",
          "Laisser les enfants crier trop fort.",
          "Continuer quand le chien décroche."
        ],
        troubleshooting: [
          "S’il ne sait pas où aller, une seule personne appelle à la fois.",
          "S’il court mais saute, récompense plus bas.",
          "S’il se lasse, arrête plus tôt.",
          "S’il ignore une personne, augmente la récompense.",
          "S’il s’excite trop, fais une pause calme."
        ],
        homework: "Fais ce jeu 2 fois dans la semaine, en séance très courte."
      },
      {
        id: "premium-21",
        free: false,
        category: "Chiot bouledogue",
        title: "Mordillements : rediriger sans punir",
        level: "Chiot",
        duration: "10 min",
        goal: "Apprendre au chiot à mordiller ses jouets plutôt que les mains ou vêtements.",
        intro: "Le mordillement est normal chez le chiot. Il découvre le monde avec sa bouche, soulage ses dents et apprend aussi à gérer son excitation.",
        why: "Punir un chiot qui mordille peut créer de la frustration ou de l’incompréhension. Le vrai objectif est de lui apprendre ce qu’il a le droit de mordiller.",
        before: [
          "Prépare plusieurs jouets de textures différentes.",
          "Garde un jouet près de toi dans les moments d’excitation.",
          "Évite les jeux qui excitent trop le chiot.",
          "Interviens avant qu’il monte trop en énergie.",
          "Reste calme même s’il mordille fort."
        ],
        progress: [
          "Jour 1 : rediriger vers un jouet simple.",
          "Jour 2 : récompenser les mordillements sur jouet.",
          "Jour 3 : stopper brièvement le jeu si les dents touchent la peau.",
          "Jour 4 : varier les jouets selon son besoin.",
          "Jour 5 : anticiper avant les moments de folie."
        ],
        steps: [
          "S’il mordille la main, immobilise-la.",
          "Présente calmement un jouet adapté.",
          "Félicite dès qu’il mordille le jouet.",
          "Si l’excitation monte, stoppe l’interaction quelques secondes.",
          "Reprends le jeu calmement ensuite."
        ],
        success: [
          "Le chiot cherche plus souvent ses jouets.",
          "Les mordillements sur les mains diminuent.",
          "Il redescend plus vite après excitation.",
          "Tu anticipes mieux les moments difficiles.",
          "Les interactions deviennent plus agréables."
        ],
        mistakes: [
          "Agiter les mains devant son museau.",
          "Le repousser brutalement.",
          "Crier très fort.",
          "Jouer avec les mains directement.",
          "Attendre qu’il soit déjà surexcité."
        ],
        troubleshooting: [
          "S’il mordille plus fort, réduis l’excitation du jeu.",
          "S’il ignore le jouet, teste une autre texture.",
          "S’il devient incontrôlable, propose une pause calme.",
          "S’il mordille surtout le soir, ajoute une routine de redescente.",
          "S’il fatigue, arrête avant saturation."
        ],
        homework: "Prépare 3 jouets de textures différentes et teste celui qu’il préfère."
      },
      {
        id: "premium-22",
        free: false,
        category: "Chiot bouledogue",
        title: "Propreté : construire une routine fiable",
        level: "Chiot",
        duration: "12 min",
        goal: "Mettre en place des sorties stratégiques pour accélérer l’apprentissage de la propreté.",
        intro: "La propreté repose surtout sur l’anticipation. Plus ton chiot réussit dehors, plus il comprend vite où il doit faire.",
        why: "Chaque réussite dehors construit une habitude. À l’inverse, les accidents répétés à l’intérieur ralentissent l’apprentissage.",
        before: [
          "Prépare des sorties fréquentes.",
          "Choisis un endroit calme pour les besoins.",
          "Prévois de petites récompenses.",
          "Observe les horaires habituels.",
          "Nettoie les accidents sans gronder."
        ],
        progress: [
          "Jour 1 : sorties après repas et siestes.",
          "Jour 2 : ajout des sorties après jeu.",
          "Jour 3 : récompense immédiate dehors.",
          "Jour 4 : réduction des accidents.",
          "Jour 5 : début de demande plus claire du chiot."
        ],
        steps: [
          "Sors ton chiot après réveil, repas, jeu et sieste.",
          "Va toujours au même endroit au début.",
          "Reste calme jusqu’à ce qu’il fasse.",
          "Récompense immédiatement dehors.",
          "Rentre calmement après."
        ],
        success: [
          "Les accidents diminuent.",
          "Le chiot fait plus vite dehors.",
          "Il commence à chercher la porte.",
          "Tu comprends mieux son rythme.",
          "Les sorties deviennent plus prévisibles."
        ],
        mistakes: [
          "Gronder après coup.",
          "Attendre trop longtemps entre deux sorties.",
          "Jouer dehors avant les besoins.",
          "Rentrer trop vite avant qu’il fasse.",
          "Punir un accident."
        ],
        troubleshooting: [
          "S’il fait dedans juste après être rentré, reste plus longtemps dehors.",
          "S’il joue au lieu de faire, choisis un lieu plus calme.",
          "S’il oublie souvent, augmente les sorties.",
          "S’il fait toujours au même endroit dedans, nettoie avec produit adapté.",
          "S’il progresse lentement, garde une routine stable."
        ],
        homework: "Note les horaires des besoins pendant 5 jours."
      },
      {
        id: "premium-23",
        free: false,
        category: "Chiot bouledogue",
        title: "Premières nuits plus calmes",
        level: "Chiot",
        duration: "10 min",
        goal: "Aider le chiot à dormir avec moins de pleurs et plus de sécurité émotionnelle.",
        intro: "Un chiot vient souvent de quitter sa fratrie et ses repères. Les premières nuits peuvent donc être difficiles.",
        why: "Un chiot rassuré apprend plus facilement à dormir seul progressivement. Le laisser paniquer trop longtemps peut augmenter son stress.",
        before: [
          "Prépare un couchage confortable.",
          "Fais une sortie calme avant le coucher.",
          "Évite les jeux excitants le soir.",
          "Prévois un environnement calme.",
          "Décide d’une routine stable."
        ],
        progress: [
          "Jour 1 : couchage proche de toi si besoin.",
          "Jour 2 : routine du soir identique.",
          "Jour 3 : réduire les interactions nocturnes.",
          "Jour 4 : augmenter les périodes calmes.",
          "Jour 5 : commencer à éloigner légèrement le couchage."
        ],
        steps: [
          "Installe son couchage dans un endroit rassurant.",
          "Prévois une sortie calme avant la nuit.",
          "Réponds calmement aux vrais besoins nocturnes.",
          "Évite les jeux ou grandes discussions la nuit.",
          "Reprends la routine identique chaque soir."
        ],
        success: [
          "Les pleurs diminuent progressivement.",
          "Le chiot se rendort plus vite.",
          "Les réveils deviennent plus prévisibles.",
          "Le coucher devient plus calme.",
          "Le chiot gagne en confiance."
        ],
        mistakes: [
          "Le laisser paniquer longtemps.",
          "Jouer avec lui en pleine nuit.",
          "Changer le lieu de couchage chaque soir.",
          "Réagir avec excitation aux réveils.",
          "Créer une fête nocturne."
        ],
        troubleshooting: [
          "S’il pleure immédiatement, rapproche légèrement le couchage.",
          "S’il joue la nuit, garde les interactions neutres.",
          "S’il se réveille souvent, ajuste les sorties.",
          "S’il s’agite avant dormir, calme davantage la soirée.",
          "S’il progresse, garde les mêmes habitudes."
        ],
        homework: "Crée un rituel du soir identique pendant une semaine."
      },
      {
        id: "premium-24",
        free: false,
        category: "Chiot bouledogue",
        title: "Socialisation douce et sécurisée",
        level: "Chiot",
        duration: "15 min",
        goal: "Exposer le chiot au monde sans le submerger.",
        intro: "Socialiser un chiot ne veut pas dire lui faire rencontrer tout le monde. Le but est surtout de créer des expériences positives.",
        why: "Une bonne socialisation aide ton chiot à devenir plus serein face aux humains, bruits, chiens et environnements variés.",
        before: [
          "Choisis des lieux calmes.",
          "Prévois des récompenses.",
          "Observe les signes d’inconfort.",
          "Ne force jamais le contact.",
          "Privilégie les expériences courtes."
        ],
        progress: [
          "Jour 1 : observer un nouvel endroit.",
          "Jour 2 : croiser quelques personnes calmes.",
          "Jour 3 : écouter des bruits variés.",
          "Jour 4 : voir un chien calme à distance.",
          "Jour 5 : multiplier les mini-expériences positives."
        ],
        steps: [
          "Laisse ton chiot observer librement.",
          "Récompense les regards calmes.",
          "Éloigne-toi s’il cherche à fuir.",
          "Garde les séances courtes.",
          "Termine toujours sur une expérience positive."
        ],
        success: [
          "Le chiot explore plus facilement.",
          "Il récupère vite après une nouveauté.",
          "Il regarde davantage avant de réagir.",
          "Il reste plus détendu dehors.",
          "Les nouvelles situations deviennent plus faciles."
        ],
        mistakes: [
          "Forcer les rencontres.",
          "Le mettre dans les bras de tout le monde.",
          "Confondre socialisation et immersion brutale.",
          "Ignorer les signes de peur.",
          "Multiplier les stimulations d’un coup."
        ],
        troubleshooting: [
          "S’il se fige, augmente la distance.",
          "S’il refuse les friandises, l’environnement est trop difficile.",
          "S’il fuit, rends la situation plus simple.",
          "S’il s’excite trop, raccourcis les sorties.",
          "S’il progresse, garde des expériences variées mais courtes."
        ],
        homework: "Fais 3 mini-sorties d’observation de 10 minutes cette semaine."
      },
      {
        id: "premium-25",
        free: false,
        category: "Calme à la maison",
        title: "Ne pas sauter sur les invités",
        level: "Intermédiaire",
        duration: "12 min",
        goal: "Remplacer les sauts par un comportement poli et récompensé.",
        intro: "Sauter est souvent une façon de demander du contact. Ton chien doit comprendre que les quatre pattes au sol rapportent plus.",
        why: "Si les invités caressent ou parlent pendant les sauts, le comportement se renforce. Il faut donc créer une règle claire et cohérente.",
        before: [
          "Préviens les invités de la règle.",
          "Prépare des récompenses.",
          "Commence avec une personne complice.",
          "Travaille sur des entrées courtes.",
          "Reste calme toi aussi."
        ],
        progress: [
          "Jour 1 : ignorer les sauts.",
          "Jour 2 : récompenser les pattes au sol.",
          "Jour 3 : ajouter un assis.",
          "Jour 4 : travailler avec plusieurs personnes.",
          "Jour 5 : tester avec une vraie visite courte."
        ],
        steps: [
          "La personne entre calmement.",
          "Elle ignore les sauts.",
          "Dès que les quatre pattes sont au sol, elle récompense.",
          "Ajoute ensuite un assis si possible.",
          "Répète plusieurs petites entrées."
        ],
        success: [
          "Ton chien saute moins longtemps.",
          "Il garde plus facilement les pattes au sol.",
          "Les entrées deviennent plus calmes.",
          "Les invités comprennent mieux la règle.",
          "Ton chien récupère plus vite."
        ],
        mistakes: [
          "Caresser pendant qu’il saute.",
          "Le repousser avec les mains.",
          "Crier pendant les sauts.",
          "Faire durer les séances trop longtemps.",
          "Changer de règle selon les invités."
        ],
        troubleshooting: [
          "S’il saute encore beaucoup, réduis l’excitation des entrées.",
          "S’il mordille, stoppe brièvement l’interaction.",
          "S’il s’excite trop, fais une pause avant une nouvelle entrée.",
          "S’il progresse, ajoute progressivement plus de mouvement.",
          "S’il oublie, recommence sur une situation plus simple."
        ],
        homework: "Fais 5 fausses entrées avec une personne complice."
      },
      {
        id: "premium-26",
        free: false,
        category: "Calme à la maison",
        title: "Canaliser l’excitation du soir",
        level: "Tous niveaux",
        duration: "10 min",
        goal: "Réduire les moments de folie du soir avec une routine de redescente.",
        intro: "Beaucoup de chiens ont un pic d’énergie le soir. Chez le bouledogue, cela peut vite devenir des zoomies, des mordillements ou une excitation difficile à gérer.",
        why: "Plus tu anticipes ce moment, plus tu peux aider ton chien à redescendre avant qu’il déborde complètement.",
        before: [
          "Repère l’heure du pic d’excitation.",
          "Prépare une activité calme.",
          "Baisse les stimulations autour.",
          "Évite les jeux de poursuite.",
          "Prévois un endroit calme."
        ],
        progress: [
          "Jour 1 : identifier le moment critique.",
          "Jour 2 : proposer une activité calme avant.",
          "Jour 3 : récompenser les moments posés.",
          "Jour 4 : instaurer une routine stable.",
          "Jour 5 : réduire progressivement l’intensité du pic."
        ],
        steps: [
          "Avant le pic, propose une activité calme.",
          "Récompense les moments où il se pose.",
          "Parle doucement et baisse l’énergie.",
          "Évite les jeux qui montent trop l’excitation.",
          "Termine par un moment calme au panier."
        ],
        success: [
          "Les zoomies diminuent.",
          "Ton chien redescend plus vite.",
          "Le soir devient plus calme.",
          "Il accepte plus facilement de se poser.",
          "Tu anticipes mieux les moments difficiles."
        ],
        mistakes: [
          "Attendre qu’il soit déjà ingérable.",
          "Répondre avec des jeux très excitants.",
          "Le faire courir intensément le soir.",
          "Parler très fort.",
          "Multiplier les stimulations."
        ],
        troubleshooting: [
          "S’il s’excite encore, commence la routine plus tôt.",
          "S’il mordille, propose un jouet calme.",
          "S’il tourne partout, réduis les stimulations visuelles.",
          "S’il fatigue, favorise les activités mentales.",
          "S’il progresse, garde les mêmes horaires."
        ],
        homework: "Mets en place une routine calme 20 minutes avant son pic habituel."
      },
      {
        id: "premium-27",
        free: false,
        category: "Calme à la maison",
        title: "Le tapis de calme",
        level: "Intermédiaire",
        duration: "12 min",
        goal: "Apprendre au chien à se poser sur un tapis pendant les moments de vie quotidienne.",
        intro: "Le tapis devient une zone claire où ton chien peut se détendre pendant que tu cuisines, travailles ou reçois.",
        why: "Un chien ne sait pas automatiquement comment se poser. Le tapis lui donne un repère concret et rassurant.",
        before: [
          "Choisis un tapis spécifique.",
          "Prépare des récompenses calmes.",
          "Travaille dans un endroit tranquille.",
          "Commence sur des séances très courtes.",
          "Évite les distractions fortes au début."
        ],
        progress: [
          "Jour 1 : récompenser le regard vers le tapis.",
          "Jour 2 : récompenser deux pattes dessus.",
          "Jour 3 : attendre un assis ou couché.",
          "Jour 4 : ajouter le mot “tapis”.",
          "Jour 5 : augmenter progressivement la durée."
        ],
        steps: [
          "Pose le tapis au sol.",
          "Récompense dès qu’il le touche ou regarde.",
          "Ajoute progressivement plus de durée.",
          "Récompense les moments calmes sur le tapis.",
          "Utilise ensuite le tapis dans la vie quotidienne."
        ],
        success: [
          "Ton chien va plus facilement sur le tapis.",
          "Il reste posé quelques secondes.",
          "Il comprend le mot “tapis”.",
          "Il se calme plus vite.",
          "Tu peux l’utiliser dans plusieurs situations."
        ],
        mistakes: [
          "Vouloir 20 minutes dès le début.",
          "Utiliser le tapis comme punition.",
          "Ne jamais récompenser la durée.",
          "Commencer dans un environnement trop stimulant.",
          "Parler trop pendant l’exercice."
        ],
        troubleshooting: [
          "S’il quitte vite le tapis, récompense plus souvent.",
          "S’il s’excite, raccourcis les séances.",
          "S’il ignore le tapis, rends-le plus confortable.",
          "S’il progresse lentement, garde plusieurs répétitions faciles.",
          "S’il comprend bien, ajoute doucement des distractions."
        ],
        homework: "Travaille le tapis 3 minutes par jour pendant une semaine."
      },
      {
        id: "premium-28",
        free: false,
        category: "Obéissance utile",
        title: "Apprendre le “laisse”",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Apprendre à renoncer à un objet ou une nourriture au sol.",
        intro: "Le “laisse” est une commande très utile pour la sécurité et le quotidien.",
        why: "Ton chien apprend qu’abandonner quelque chose peut être plus intéressant que le prendre.",
        before: [
          "Prépare des friandises simples.",
          "Travaille dans un lieu calme.",
          "Commence avec la main fermée.",
          "Reste patiente.",
          "Récompense rapidement les bonnes décisions."
        ],
        progress: [
          "Jour 1 : friandise dans la main fermée.",
          "Jour 2 : attendre qu’il recule.",
          "Jour 3 : ajouter le mot “laisse”.",
          "Jour 4 : travailler avec friandise visible.",
          "Jour 5 : commencer avec objet au sol protégé."
        ],
        steps: [
          "Tiens une friandise dans la main fermée.",
          "Attends qu’il recule ou détourne le regard.",
          "Dis “oui” et récompense avec une autre friandise.",
          "Ajoute ensuite le mot “laisse”.",
          "Travaille progressivement avec plus de difficulté."
        ],
        success: [
          "Ton chien renonce plus vite.",
          "Il réfléchit avant de se jeter.",
          "Il répond mieux au mot “laisse”.",
          "Tu récupères son attention plus facilement.",
          "L’exercice devient plus fluide."
        ],
        mistakes: [
          "Laisser le chien voler la friandise.",
          "Dire “laisse” trop tôt.",
          "Transformer l’exercice en conflit.",
          "Bouger trop vite la main.",
          "Faire des séances trop longues."
        ],
        troubleshooting: [
          "S’il gratte la main, reste immobile.",
          "S’il abandonne difficilement, utilise une friandise moins forte.",
          "S’il se frustre, simplifie l’exercice.",
          "S’il réussit bien, augmente doucement la difficulté.",
          "S’il échoue plusieurs fois, reviens à l’étape précédente."
        ],
        homework: "Fais 5 répétitions par jour avec une friandise dans la main fermée."
      },
      {
        id: "premium-29",
        free: false,
        category: "Obéissance utile",
        title: "Apprendre le “donne” sans bataille",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Récupérer un objet sans poursuite ni conflit.",
        intro: "Le “donne” doit être un échange agréable et non une bataille.",
        why: "Si tu arraches toujours les objets, ton chien peut apprendre à fuir ou protéger ce qu’il a en gueule.",
        before: [
          "Choisis un jouet peu précieux.",
          "Prépare une friandise intéressante.",
          "Travaille dans un lieu calme.",
          "Ne poursuis jamais ton chien.",
          "Garde une attitude détendue."
        ],
        progress: [
          "Jour 1 : échange simple jouet contre friandise.",
          "Jour 2 : ajouter le mot “donne”.",
          "Jour 3 : rendre parfois le jouet après échange.",
          "Jour 4 : varier les objets.",
          "Jour 5 : travailler avec objets un peu plus intéressants."
        ],
        steps: [
          "Donne un jouet simple.",
          "Présente une friandise près de son nez.",
          "Quand il lâche, dis “donne”.",
          "Récompense immédiatement.",
          "Rends parfois le jouet pour éviter la frustration."
        ],
        success: [
          "Ton chien lâche plus facilement.",
          "Il ne fuit plus avec les objets.",
          "Les échanges deviennent fluides.",
          "Il reste détendu pendant l’exercice.",
          "Tu peux récupérer les objets calmement."
        ],
        mistakes: [
          "Courir après lui.",
          "Lui retirer systématiquement l’objet.",
          "Commencer avec un objet très précieux.",
          "Crier pendant l’exercice.",
          "Transformer l’échange en conflit."
        ],
        troubleshooting: [
          "S’il fuit, rends-toi plus intéressant.",
          "S’il garde fort l’objet, augmente la valeur de la récompense.",
          "S’il se crispe, reviens à un objet plus simple.",
          "S’il lâche puis reprend vite, récompense plus calmement.",
          "S’il progresse, garde des séances courtes."
        ],
        homework: "Fais 5 échanges par jour avec un jouet simple."
      },
      {
        id: "premium-30",
        free: false,
        category: "Obéissance utile",
        title: "Monter et descendre du canapé sur demande",
        level: "Tous niveaux",
        duration: "8 min",
        goal: "Garder des règles claires autour du canapé sans conflit.",
        intro: "Le canapé peut être autorisé tout en restant cadré. L’important est que ton chien sache monter et descendre quand tu le demandes.",
        why: "Des règles cohérentes évitent les conflits inutiles et rendent le quotidien plus fluide.",
        before: [
          "Choisis deux mots simples.",
          "Prépare quelques récompenses.",
          "Travaille hors conflit.",
          "Évite de pousser ton chien physiquement.",
          "Reste cohérente sur les règles."
        ],
        progress: [
          "Jour 1 : apprendre “monte”.",
          "Jour 2 : apprendre “descends”.",
          "Jour 3 : ajouter la récompense au sol.",
          "Jour 4 : répéter sans conflit.",
          "Jour 5 : utiliser au quotidien."
        ],
        steps: [
          "Invite ton chien à monter avec une friandise.",
          "Dis “monte”.",
          "Lance ensuite une friandise au sol en disant “descends”.",
          "Récompense une fois au sol.",
          "Répète calmement plusieurs fois."
        ],
        success: [
          "Ton chien descend plus facilement.",
          "Il comprend les deux mots.",
          "Les interactions autour du canapé sont plus calmes.",
          "Tu évites les conflits physiques.",
          "Les règles deviennent plus claires."
        ],
        mistakes: [
          "Le pousser physiquement.",
          "Changer les règles selon l’humeur.",
          "Travailler quand il dort profondément.",
          "Crier pour le faire descendre.",
          "Ne jamais récompenser."
        ],
        troubleshooting: [
          "S’il refuse de descendre, utilise une meilleure récompense.",
          "S’il saute avant le mot, ralentis l’exercice.",
          "S’il grogne, stoppe et reviens à plus simple.",
          "S’il comprend vite, espace progressivement les récompenses.",
          "S’il se frustre, garde des séances très courtes."
        ],
        homework: "Fais 3 montées/descentes volontaires par jour pendant 5 jours."
      },
      {
        id: "premium-31",
        free: false,
        category: "Vie de famille",
        title: "Gestion de la jalousie",
        level: "Intermédiaire",
        duration: "12 min",
        goal: "Réduire les interruptions quand tu t’occupes de quelqu’un d’autre.",
        intro: "Ce qu’on appelle souvent jalousie est généralement une demande d’attention ou une difficulté à partager les moments sociaux.",
        why: "Si ton chien obtient ton attention uniquement quand il s’impose, il apprend à recommencer. L’objectif est de récompenser le calme pendant que ton attention est ailleurs.",
        before: [
          "Repère les situations qui déclenchent le comportement.",
          "Prépare une zone calme comme un tapis ou panier.",
          "Travaille d’abord sur des scènes très courtes.",
          "Garde une attitude neutre.",
          "Récompense avant qu’il s’impose."
        ],
        progress: [
          "Jour 1 : identifier les situations sensibles.",
          "Jour 2 : installer le tapis ou panier.",
          "Jour 3 : simuler une courte conversation.",
          "Jour 4 : augmenter légèrement la durée.",
          "Jour 5 : tester avec une vraie situation simple."
        ],
        steps: [
          "Installe ton chien sur son tapis.",
          "Commence une activité courte : téléphone, discussion ou câlin à quelqu’un.",
          "Récompense s’il reste calme.",
          "Redirige sans gronder s’il s’interpose.",
          "Offre ensuite un moment avec lui quand il est posé."
        ],
        success: [
          "Ton chien interrompt moins.",
          "Il reste plus facilement sur son tapis.",
          "Il accepte mieux que ton attention soit ailleurs.",
          "Il récupère plus vite après frustration.",
          "Les moments sociaux deviennent plus calmes."
        ],
        mistakes: [
          "Le repousser vivement.",
          "Lui donner attention uniquement quand il s’impose.",
          "Vouloir qu’il accepte tout sans apprentissage.",
          "Ignorer les petits progrès.",
          "Travailler directement sur une situation trop intense."
        ],
        troubleshooting: [
          "S’il s’interpose tout de suite, réduis la durée.",
          "S’il aboie, attends une micro-pause de silence.",
          "S’il quitte le tapis, récompense plus souvent.",
          "S’il se frustre, propose une occupation calme.",
          "S’il progresse, augmente la durée très progressivement."
        ],
        homework: "Fais 3 mini-scènes par jour : téléphone + chien sur tapis + récompense calme."
      },
      {
        id: "premium-32",
        free: false,
        category: "Vie de famille",
        title: "Préparer l’arrivée d’un bébé",
        level: "Avancé",
        duration: "15 min",
        goal: "Préparer ton chien aux nouveaux sons, objets et routines avant l’arrivée du bébé.",
        intro: "L’arrivée d’un bébé change beaucoup de choses : sons, odeurs, horaires, attention disponible et organisation de la maison.",
        why: "Plus ton chien découvre ces nouveautés progressivement, moins le changement sera brutal le jour de l’arrivée.",
        before: [
          "Présente les nouveaux objets calmement.",
          "Travaille les bases : panier, attends, descends, calme.",
          "Ne force jamais le contact.",
          "Installe les nouvelles règles avant l’arrivée.",
          "Prévois des moments individuels avec ton chien."
        ],
        progress: [
          "Semaine 1 : découvrir les objets du bébé.",
          "Semaine 2 : travailler le panier près des nouvelles zones.",
          "Semaine 3 : écouter des sons de bébé à faible volume.",
          "Semaine 4 : adapter les routines.",
          "Après l’arrivée : rencontres courtes, calmes et supervisées."
        ],
        steps: [
          "Présente poussette, lit ou transat sans excitation.",
          "Récompense le calme autour de ces objets.",
          "Fais écouter des sons de bébé très doucement.",
          "Travaille une zone refuge pour ton chien.",
          "Prépare des règles simples pour toute la famille."
        ],
        success: [
          "Ton chien reste plus calme près des nouveaux objets.",
          "Il accepte mieux les changements de routine.",
          "Il va plus facilement dans son espace.",
          "Il réagit moins aux sons nouveaux.",
          "Les premières rencontres sont mieux contrôlées."
        ],
        mistakes: [
          "Tout changer le jour de l’arrivée.",
          "Exclure brutalement le chien.",
          "Forcer le contact avec le bébé.",
          "Punir les réactions d’inquiétude.",
          "Oublier de garder des moments positifs avec le chien."
        ],
        troubleshooting: [
          "S’il s’agite près des objets, augmente la distance.",
          "S’il aboie aux sons, baisse le volume.",
          "S’il cherche trop le contact, travaille davantage le panier.",
          "S’il semble inquiet, ralentis la progression.",
          "S’il a des réactions fortes, demande l’aide d’un professionnel."
        ],
        homework: "Choisis une nouvelle règle et installe-la progressivement cette semaine."
      },
      {
        id: "premium-33",
        free: false,
        category: "Vie de famille",
        title: "Préparer l’arrivée d’un deuxième chien",
        level: "Avancé",
        duration: "15 min",
        goal: "Organiser les premières rencontres et éviter les tensions inutiles.",
        intro: "L’arrivée d’un autre chien peut être joyeuse, mais aussi perturbante. Ton bouledogue doit garder des repères et des ressources sécurisées.",
        why: "Une bonne introduction réduit les risques de tension autour du territoire, de l’attention, des jouets ou de la nourriture.",
        before: [
          "Prévois une première rencontre en terrain neutre.",
          "Sépare les ressources au début.",
          "Garde des moments individuels avec chaque chien.",
          "Évite les face-à-face en laisse courte.",
          "Observe les signaux d’inconfort."
        ],
        progress: [
          "Étape 1 : marche parallèle à distance.",
          "Étape 2 : rapprochement progressif.",
          "Étape 3 : retour à la maison avec gestion des espaces.",
          "Étape 4 : courtes périodes ensemble.",
          "Étape 5 : augmentation progressive du temps partagé."
        ],
        steps: [
          "Organise une rencontre dehors, en terrain neutre.",
          "Fais marcher les deux chiens en parallèle.",
          "Garde les laisses détendues.",
          "Évite de laisser des jouets précieux au début.",
          "Prévois des pauses séparées."
        ],
        success: [
          "Les chiens se croisent sans tension forte.",
          "Ton bouledogue récupère vite après la rencontre.",
          "Les ressources sont mieux respectées.",
          "Les moments ensemble deviennent plus calmes.",
          "Chaque chien garde son espace."
        ],
        mistakes: [
          "Les mettre ensemble directement dans un petit espace.",
          "Laisser des jouets précieux dès le premier jour.",
          "Forcer les interactions.",
          "Punir ton chien s’il exprime un inconfort modéré.",
          "Oublier les moments individuels."
        ],
        troubleshooting: [
          "S’il se tend, augmente la distance.",
          "S’il protège les ressources, sépare davantage.",
          "S’il poursuit l’autre chien, fais des pauses.",
          "S’il évite, respecte son rythme.",
          "S’il y a conflit, demande un accompagnement professionnel."
        ],
        homework: "Prépare les espaces séparés avant l’arrivée du nouveau chien."
      },
      {
        id: "premium-34",
        free: false,
        category: "Soins et manipulation",
        title: "Toucher les pattes sans stress",
        level: "Tous niveaux",
        duration: "10 min",
        goal: "Habituer ton chien à accepter le contact sur les pattes pour les soins.",
        intro: "Les bouledogues peuvent être sensibles des pattes, surtout s’ils ont déjà eu une gêne, une irritation ou une mauvaise expérience.",
        why: "Accepter le contact facilite le nettoyage, l’inspection des coussinets, la coupe des griffes et les visites vétérinaires.",
        before: [
          "Choisis un moment calme.",
          "Prépare des récompenses.",
          "Commence par des contacts très courts.",
          "Ne force pas si ton chien retire fortement la patte.",
          "Travaille loin des moments de soin urgent."
        ],
        progress: [
          "Jour 1 : toucher brièvement l’épaule.",
          "Jour 2 : descendre vers la patte.",
          "Jour 3 : tenir une seconde.",
          "Jour 4 : regarder rapidement entre les coussinets.",
          "Jour 5 : associer le geste à un vrai mini-soin."
        ],
        steps: [
          "Touche brièvement une zone facile.",
          "Dis “oui” et récompense.",
          "Descends progressivement vers la patte.",
          "Tiens une seconde seulement.",
          "Arrête avant qu’il se débatte."
        ],
        success: [
          "Ton chien retire moins vite la patte.",
          "Il accepte un contact plus long.",
          "Il reste plus détendu pendant l’inspection.",
          "Il associe les soins à quelque chose de positif.",
          "Tu peux vérifier les coussinets plus facilement."
        ],
        mistakes: [
          "Tenir la patte trop longtemps.",
          "Forcer malgré l’inconfort.",
          "Commencer directement entre les coussinets.",
          "Faire l’exercice seulement quand il y a déjà une douleur.",
          "Oublier de récompenser les micro-progrès."
        ],
        troubleshooting: [
          "S’il retire la patte, touche une zone moins sensible.",
          "S’il se crispe, raccourcis le geste.",
          "S’il mordille, fais une pause.",
          "S’il progresse, augmente d’une seconde seulement.",
          "S’il semble douloureux, consulte un vétérinaire."
        ],
        homework: "Fais 3 touches-récompenses par patte pendant 5 jours."
      },
      {
        id: "premium-35",
        free: false,
        category: "Soins et manipulation",
        title: "Nettoyage des plis du visage",
        level: "Tous niveaux",
        duration: "8 min",
        goal: "Rendre le nettoyage du visage plus coopératif et moins stressant.",
        intro: "Le bouledogue français a souvent besoin de soins réguliers au niveau du visage et des plis.",
        why: "Plus le geste est prévisible et positif, plus ton chien l’acceptera facilement au quotidien.",
        before: [
          "Prépare le matériel avant d’appeler ton chien.",
          "Montre la compresse sans toucher au début.",
          "Travaille sur des mini-séances.",
          "Récompense souvent.",
          "Ne bloque pas fortement la tête."
        ],
        progress: [
          "Jour 1 : montrer la compresse.",
          "Jour 2 : toucher le côté du visage.",
          "Jour 3 : nettoyer une toute petite zone.",
          "Jour 4 : ajouter une seconde zone.",
          "Jour 5 : créer une routine courte et calme."
        ],
        steps: [
          "Montre la compresse et récompense.",
          "Touche brièvement le visage.",
          "Nettoie une petite zone seulement.",
          "Fais une pause avant l’agacement.",
          "Termine par une récompense calme."
        ],
        success: [
          "Ton chien fuit moins le matériel.",
          "Il accepte un contact plus doux.",
          "Il reste plus posé pendant le soin.",
          "Le nettoyage devient plus rapide.",
          "La routine est moins stressante."
        ],
        mistakes: [
          "Bloquer la tête fortement.",
          "Tout nettoyer d’un coup.",
          "Sortir le matériel uniquement au moment désagréable.",
          "Récompenser trop tard.",
          "S’énerver si le chien bouge."
        ],
        troubleshooting: [
          "S’il fuit la compresse, travaille seulement la présence du matériel.",
          "S’il bouge beaucoup, raccourcis le geste.",
          "S’il se débat, reviens à une zone moins sensible.",
          "S’il accepte bien, augmente très progressivement.",
          "S’il y a rougeur ou odeur forte, demande conseil à un vétérinaire."
        ],
        homework: "Fais 2 mini-séances de familiarisation avec le matériel par jour."
      },
      {
        id: "premium-36",
        free: false,
        category: "Soins et manipulation",
        title: "Coupe des griffes : désensibilisation",
        level: "Avancé",
        duration: "12 min",
        goal: "Préparer ton chien à la coupe des griffes sans panique.",
        intro: "Beaucoup de chiens redoutent le coupe-griffe. La bonne approche consiste à rendre l’objet banal avant de couper.",
        why: "Si tu commences directement par couper, ton chien peut associer l’outil à une contrainte. La désensibilisation rend le soin plus acceptable.",
        before: [
          "Prépare l’outil sans l’utiliser tout de suite.",
          "Travaille quand ton chien est calme.",
          "Récompense chaque étape.",
          "Ne coupe pas si ton chien panique.",
          "Fais des séances très courtes."
        ],
        progress: [
          "Jour 1 : outil posé au sol.",
          "Jour 2 : outil dans ta main.",
          "Jour 3 : toucher une patte sans outil.",
          "Jour 4 : approcher l’outil d’une griffe.",
          "Jour 5 : simuler puis récompenser."
        ],
        steps: [
          "Pose le coupe-griffe au sol et récompense le regard.",
          "Prends l’outil en main sans toucher la patte.",
          "Touche une patte avec ta main.",
          "Approche l’outil sans couper.",
          "Ne coupe que lorsque ton chien est vraiment prêt."
        ],
        success: [
          "Ton chien fuit moins l’outil.",
          "Il accepte que tu touches ses pattes.",
          "Il reste plus calme pendant la préparation.",
          "La coupe devient plus prévisible.",
          "Tu peux progresser sans conflit."
        ],
        mistakes: [
          "Couper toutes les griffes d’un coup.",
          "Attendre qu’il se débatte pour arrêter.",
          "Ne sortir l’outil que pour couper.",
          "Forcer une patte.",
          "Avancer trop vite."
        ],
        troubleshooting: [
          "S’il fuit l’outil, éloigne-le et récompense simplement le regard.",
          "S’il retire la patte, reviens à une touche plus courte.",
          "S’il panique, ne coupe pas ce jour-là.",
          "S’il accepte bien, reste quand même progressif.",
          "S’il a déjà eu mal, demande l’aide d’un professionnel."
        ],
        homework: "Pendant 7 jours, fais uniquement apparition de l’outil + récompense."
      },
      {
        id: "premium-37",
        free: false,
        category: "Soins et manipulation",
        title: "Refus du harnais : l’enfiler sans lutte",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Aider ton chien à accepter le harnais sans fuite ni blocage.",
        intro: "Certains chiens n’aiment pas passer la tête dans le harnais ou être manipulés avant la promenade.",
        why: "Si le harnais est enfilé de force, il peut devenir un signal de stress. Le rendre positif facilite chaque sortie.",
        before: [
          "Pose le harnais au sol.",
          "Prépare des friandises.",
          "Ne poursuis jamais ton chien avec le harnais.",
          "Travaille hors départ urgent.",
          "Fais des répétitions très courtes."
        ],
        progress: [
          "Jour 1 : regarder le harnais.",
          "Jour 2 : approcher le museau.",
          "Jour 3 : passer la tête sans attacher.",
          "Jour 4 : fermer une attache brièvement.",
          "Jour 5 : associer à une sortie calme."
        ],
        steps: [
          "Pose le harnais au sol et récompense l’approche.",
          "Tiens-le ouvert avec une friandise au centre.",
          "Laisse ton chien passer la tête lui-même.",
          "Récompense sans l’attacher au début.",
          "Ferme ensuite une attache, récompense puis retire."
        ],
        success: [
          "Ton chien fuit moins le harnais.",
          "Il passe la tête plus facilement.",
          "Il reste plus calme pendant l’attache.",
          "Les sorties commencent mieux.",
          "Le harnais devient plus positif."
        ],
        mistakes: [
          "Poursuivre le chien avec le harnais.",
          "L’enfiler de force.",
          "Associer le harnais uniquement à des sorties stressantes.",
          "Faire trop de répétitions.",
          "S’énerver avant la promenade."
        ],
        troubleshooting: [
          "S’il recule, pose simplement le harnais au sol.",
          "S’il bloque au passage de tête, agrandis l’ouverture.",
          "S’il mordille le harnais, fais une pause.",
          "S’il s’agite après l’attache, retire plus vite au début.",
          "S’il progresse, ajoute la sortie comme récompense."
        ],
        homework: "Fais 5 passages de tête sans attacher pendant 3 jours."
      },
      {
        id: "premium-38",
        free: false,
        category: "Sécurité",
        title: "Nourriture au sol : éviter qu’il avale tout",
        level: "Avancé",
        duration: "12 min",
        goal: "Réduire le risque qu’il avale ce qu’il trouve dehors.",
        intro: "Certains bouledogues sont très rapides pour attraper ce qu’ils trouvent au sol. Cela peut être dangereux.",
        why: "La sécurité repose sur l’anticipation, le “laisse”, l’échange et la gestion des environnements trop risqués.",
        before: [
          "Travaille d’abord à la maison.",
          "Utilise une longe dans les zones difficiles.",
          "Prépare des récompenses fortes.",
          "Évite les lieux trop sales au début.",
          "Ne transforme pas l’exercice en course-poursuite."
        ],
        progress: [
          "Jour 1 : “laisse” à la maison.",
          "Jour 2 : objet peu intéressant au sol.",
          "Jour 3 : travailler avec distance.",
          "Jour 4 : tester dehors sur environnement facile.",
          "Jour 5 : renforcer l’échange si besoin."
        ],
        steps: [
          "Travaille “laisse” avec une friandise protégée.",
          "Dehors, garde une distance avec les déchets visibles.",
          "Récompense quand il regarde puis revient vers toi.",
          "Utilise “donne” avec échange s’il a déjà pris quelque chose.",
          "Évite les zones trop difficiles au début."
        ],
        success: [
          "Ton chien hésite avant de se jeter au sol.",
          "Il revient plus facilement vers toi.",
          "Il répond mieux au “laisse”.",
          "Tu anticipes mieux les zones à risque.",
          "Les balades sont plus sécurisées."
        ],
        mistakes: [
          "Arracher la gueule systématiquement.",
          "Travailler directement dans une zone pleine de nourriture.",
          "Ne jamais récompenser le renoncement.",
          "Crier trop tard.",
          "Laisser trop de liberté dans les zones risquées."
        ],
        troubleshooting: [
          "S’il avale trop vite, augmente la distance.",
          "S’il garde l’objet, propose un échange plus intéressant.",
          "S’il ignore “laisse”, retravaille à la maison.",
          "S’il est obsédé par le sol, choisis des lieux plus propres.",
          "S’il avale quelque chose de dangereux, contacte un vétérinaire."
        ],
        homework: "Travaille “laisse” à la maison 5 minutes par jour avant de le tester dehors."
      },
      {
        id: "premium-39",
        free: false,
        category: "Sécurité",
        title: "Chaleur et effort : adapter l’éducation",
        level: "Tous niveaux",
        duration: "8 min",
        goal: "Adapter les séances aux limites physiques du bouledogue français.",
        intro: "Le bouledogue français est sensible à la chaleur et à l’effort. Les séances doivent rester courtes, fraîches et raisonnables.",
        why: "Un chien qui fatigue ou respire mal n’apprend plus correctement. Respecter ses limites protège sa santé et sa motivation.",
        before: [
          "Évite les heures chaudes.",
          "Prévois de l’eau.",
          "Choisis l’ombre ou l’intérieur frais.",
          "Observe sa respiration.",
          "Réduis les exercices physiques."
        ],
        progress: [
          "Étape 1 : remplacer l’effort par du mental.",
          "Étape 2 : raccourcir les séances.",
          "Étape 3 : faire plus de pauses.",
          "Étape 4 : travailler tôt ou tard dans la journée.",
          "Étape 5 : adapter selon la météo."
        ],
        steps: [
          "Choisis un lieu frais.",
          "Fais une séance de 3 à 5 minutes.",
          "Observe respiration, langue, ralentissement.",
          "Stoppe avant fatigue.",
          "Remplace par des jeux de recherche à l’intérieur si besoin."
        ],
        success: [
          "Ton chien reste disponible.",
          "Il récupère vite.",
          "Les séances sont plus agréables.",
          "Tu évites les efforts inutiles.",
          "Tu respectes mieux ses limites."
        ],
        mistakes: [
          "Faire courir pour fatiguer coûte que coûte.",
          "Travailler sur sol chaud.",
          "Ignorer une respiration anormalement forte.",
          "Faire de longues séances dehors.",
          "Confondre endurance et motivation."
        ],
        troubleshooting: [
          "S’il halète beaucoup, arrête et mets-le au frais.",
          "S’il ralentit, raccourcis la séance.",
          "S’il refuse les friandises, il est peut-être trop fatigué.",
          "S’il fait chaud, travaille uniquement dedans.",
          "En cas de doute respiratoire, contacte un vétérinaire."
        ],
        homework: "Remplace une sortie chaude par 5 minutes de recherche de friandises à l’intérieur."
      },
      {
        id: "premium-40",
        free: false,
        category: "Plans premium",
        title: "Plan 7 jours : chien plus attentif",
        level: "Tous niveaux",
        duration: "7 jours",
        goal: "Créer une semaine simple pour améliorer l’attention générale.",
        intro: "Ce plan combine regard, rappel, calme et mini-récompenses. Il est idéal quand ton chien écoute seulement quand il veut.",
        why: "L’attention se construit dans les petits moments du quotidien. Une semaine structurée permet de créer des habitudes simples et visibles.",
        before: [
          "Prépare des petites récompenses.",
          "Choisis des séances courtes.",
          "Note chaque réussite.",
          "Ne cherche pas la perfection.",
          "Travaille dans plusieurs moments de la journée."
        ],
        progress: [
          "Jour 1 : récompense 10 regards spontanés.",
          "Jour 2 : fais 5 rappels faciles.",
          "Jour 3 : travaille le calme avant gamelle.",
          "Jour 4 : récompense la laisse détendue.",
          "Jour 5 : travaille le panier ou tapis.",
          "Jour 6 : fais 5 demi-tours joyeux.",
          "Jour 7 : refais les exercices les plus réussis."
        ],
        steps: [
          "Choisis un seul exercice par jour.",
          "Fais des séances de 3 à 5 minutes.",
          "Récompense les réussites simples.",
          "Note ce qui fonctionne le mieux.",
          "Termine chaque jour par une réussite facile."
        ],
        success: [
          "Ton chien te regarde plus souvent.",
          "Il revient plus facilement dans les petits moments.",
          "Il se calme plus vite.",
          "Tu vois une meilleure connexion.",
          "Les exercices deviennent plus fluides."
        ],
        mistakes: [
          "Vouloir tout corriger en une semaine.",
          "Travailler seulement quand il est excité.",
          "Oublier de noter les petites réussites.",
          "Faire des séances trop longues.",
          "Changer de plan chaque jour."
        ],
        troubleshooting: [
          "S’il décroche, réduis la durée.",
          "S’il est trop excité, travaille après une balade calme.",
          "S’il échoue, reviens à un exercice plus facile.",
          "S’il réussit vite, varie légèrement les lieux.",
          "S’il progresse, continue une deuxième semaine."
        ],
        homework: "Suis le plan 7 jours et note chaque jour une réussite précise."
      },
      {
        id: "premium-41",
        free: false,
        category: "Plans premium",
        title: "Plan 14 jours : promenade plus agréable",
        level: "Intermédiaire",
        duration: "14 jours",
        goal: "Améliorer les balades sans chercher la perfection immédiate.",
        intro: "Ce plan travaille la laisse détendue, les odeurs, les demi-tours et les croisements à distance. L’objectif est une promenade plus fluide, pas une marche militaire.",
        why: "Les problèmes de balade viennent souvent de plusieurs petites habitudes accumulées. Un plan sur 14 jours permet de progresser sans tout changer d’un coup.",
        before: [
          "Choisis un trajet test simple.",
          "Prépare des récompenses adaptées à l’extérieur.",
          "Utilise un harnais confortable.",
          "Évite les heures trop chaudes.",
          "Note les difficultés principales au départ."
        ],
        progress: [
          "Jours 1-2 : observer les moments de tirage.",
          "Jours 3-6 : récompenser la laisse détendue.",
          "Jours 7-10 : ajouter les pauses odeurs et les demi-tours.",
          "Jours 11-13 : travailler les croisements à distance.",
          "Jour 14 : refaire le trajet test et comparer."
        ],
        steps: [
          "Commence chaque balade par 2 minutes calmes.",
          "Récompense les moments où la laisse se détend.",
          "Autorise des pauses reniflage encadrées.",
          "Utilise le demi-tour avant les zones difficiles.",
          "Note une amélioration à la fin de chaque sortie."
        ],
        success: [
          "La laisse se tend moins souvent.",
          "Ton chien accepte plus facilement de repartir après une odeur.",
          "Les croisements deviennent moins explosifs.",
          "Tu anticipes mieux les déclencheurs.",
          "Les balades deviennent plus agréables."
        ],
        mistakes: [
          "Changer d’itinéraire difficile tous les jours.",
          "Vouloir une marche au pied stricte.",
          "Oublier que renifler fait partie de la balade.",
          "Faire des sorties trop longues.",
          "Se décourager après une seule mauvaise balade."
        ],
        troubleshooting: [
          "S’il tire beaucoup, reviens à une rue plus calme.",
          "S’il bloque sur les odeurs, augmente les pauses autorisées.",
          "S’il aboie aux chiens, augmente la distance.",
          "S’il fatigue vite, raccourcis la sortie.",
          "S’il progresse lentement, garde le même trajet quelques jours."
        ],
        homework: "Utilise le même trajet test au début et à la fin des 14 jours."
      },
      {
        id: "premium-42",
        free: false,
        category: "Plans premium",
        title: "Plan 30 jours : rester seul",
        level: "Avancé",
        duration: "30 jours",
        goal: "Construire progressivement la tolérance à la solitude.",
        intro: "Ce plan est volontairement progressif. Pour la solitude, aller trop vite peut renforcer le stress au lieu de l’améliorer.",
        why: "Un chien qui apprend à rester seul par petites réussites construit de la confiance. L’objectif est d’éviter les absences trop longues tant que les bases ne sont pas solides.",
        before: [
          "Observe les réactions de ton chien quand tu pars.",
          "Prépare une zone calme et sécurisée.",
          "Travaille sur des durées très courtes.",
          "Note chaque essai.",
          "Demande conseil à un professionnel en cas de détresse forte."
        ],
        progress: [
          "Semaine 1 : banaliser clés, chaussures, manteau et porte.",
          "Semaine 2 : créer une zone rassurante.",
          "Semaine 3 : augmenter les absences par petits paliers.",
          "Semaine 4 : varier les horaires et consolider les réussites.",
          "Chaque jour : noter la durée réussie et la réaction du chien."
        ],
        steps: [
          "Commence par des faux départs très faciles.",
          "Ajoute une mini absence de quelques secondes.",
          "Reviens avant que ton chien panique.",
          "Augmente seulement si l’étape précédente est calme.",
          "Garde des départs et retours neutres."
        ],
        success: [
          "Ton chien réagit moins aux signes de départ.",
          "Il reste plus calme dans sa zone.",
          "Les absences courtes deviennent possibles.",
          "Il récupère plus vite à ton retour.",
          "La durée réussie augmente progressivement."
        ],
        mistakes: [
          "Passer de 2 minutes à 1 heure trop vite.",
          "Rentrer uniquement au pic de panique.",
          "Ne pas distinguer ennui léger et détresse réelle.",
          "Punir les destructions après coup.",
          "Faire des adieux très émotionnels."
        ],
        troubleshooting: [
          "S’il pleure vite, reviens à des absences de quelques secondes.",
          "S’il détruit, réduis la durée et sécurise mieux l’espace.",
          "S’il refuse les occupations, teste-les d’abord en ta présence.",
          "S’il te suit partout, travaille la micro-distance.",
          "S’il panique fortement, demande un accompagnement professionnel."
        ],
        homework: "Crée un tableau avec durée, réaction et niveau de stress."
      },
      {
        id: "premium-43",
        free: false,
        category: "Rester seul",
        title: "Chien qui suit partout : apprendre la distance",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Aider ton chien à rester calme quand tu changes de pièce.",
        intro: "Suivre partout peut sembler mignon, mais cela peut rendre les absences plus difficiles si ton chien ne sait jamais rester seul quelques secondes.",
        why: "La solitude commence souvent par de toutes petites distances à la maison. Ton chien apprend que tu peux bouger sans disparaître définitivement.",
        before: [
          "Travaille quand ton chien est déjà calme.",
          "Utilise un tapis ou un panier.",
          "Prépare quelques récompenses.",
          "Commence par une distance minuscule.",
          "Reviens avant qu’il se lève au début."
        ],
        progress: [
          "Jour 1 : faire un pas en arrière.",
          "Jour 2 : faire deux pas.",
          "Jour 3 : sortir une seconde de la pièce.",
          "Jour 4 : fermer brièvement une porte ouverte.",
          "Jour 5 : varier les pièces très progressivement."
        ],
        steps: [
          "Demande le tapis ou le panier.",
          "Fais un pas en arrière puis reviens récompenser.",
          "Augmente à deux pas.",
          "Sors de la pièce une seconde.",
          "Reviens calmement avant qu’il se lève."
        ],
        success: [
          "Ton chien reste posé quand tu bouges.",
          "Il se lève moins automatiquement.",
          "Il accepte de te perdre de vue quelques secondes.",
          "Il récupère plus vite après ton retour.",
          "La distance devient moins inquiétante."
        ],
        mistakes: [
          "Fermer brutalement la porte.",
          "Attendre qu’il pleure pour revenir.",
          "Confondre attachement et autonomie.",
          "Augmenter la durée trop vite.",
          "Le gronder parce qu’il suit."
        ],
        troubleshooting: [
          "S’il se lève immédiatement, réduis à un demi-pas.",
          "S’il pleure, reviens à une étape plus facile.",
          "S’il quitte le tapis, récompense plus souvent.",
          "S’il te suit dans une pièce précise, commence ailleurs.",
          "S’il progresse, augmente la distance avant la durée."
        ],
        homework: "Travaille 5 micro-départs par jour depuis son tapis."
      },
      {
        id: "premium-44",
        free: false,
        category: "Calme à la maison",
        title: "Chien trop gourmand : garder le contrôle",
        level: "Tous niveaux",
        duration: "10 min",
        goal: "Utiliser la nourriture comme récompense sans déclencher sauts, aboiements ou précipitation.",
        intro: "La gourmandise est très utile pour l’éducation, mais elle peut aussi rendre certains chiens trop excités s’ils ne savent pas patienter.",
        why: "Un chien gourmand doit apprendre que le calme donne accès à la nourriture. Cela évite les doigts mordillés, les sauts et les aboiements d’impatience.",
        before: [
          "Prépare de très petits morceaux.",
          "Garde la nourriture dans une main fermée au début.",
          "Travaille dans un endroit calme.",
          "Ne donne pas pendant qu’il saute.",
          "Récompense les micro-secondes de calme."
        ],
        progress: [
          "Jour 1 : attendre qu’il recule devant la main fermée.",
          "Jour 2 : ajouter un regard calme.",
          "Jour 3 : demander un assis avant la friandise.",
          "Jour 4 : travailler avec la friandise visible.",
          "Jour 5 : utiliser la règle dans la vie quotidienne."
        ],
        steps: [
          "Tiens une friandise dans la main fermée.",
          "Attends qu’il arrête de gratter ou lécher.",
          "Récompense dès qu’il recule ou regarde ailleurs.",
          "Ajoute ensuite un assis ou un regard.",
          "Donne calmement, sans exciter."
        ],
        success: [
          "Ton chien saute moins pour la nourriture.",
          "Il attend plus calmement.",
          "Il réfléchit avant de se précipiter.",
          "Les friandises restent utiles pour travailler.",
          "Tu gardes mieux le contrôle pendant les séances."
        ],
        mistakes: [
          "Donner pendant qu’il saute.",
          "Exciter le chien avec la nourriture.",
          "Utiliser des morceaux trop gros.",
          "Parler trop vite ou trop fort.",
          "Récompenser l’impatience."
        ],
        troubleshooting: [
          "S’il gratte la main, garde-la immobile.",
          "S’il aboie, attends une micro-pause de silence.",
          "S’il mordille les doigts, donne plus bas et main plate.",
          "S’il s’énerve trop, utilise une récompense moins forte.",
          "S’il progresse, applique la règle avant chaque friandise."
        ],
        homework: "Avant chaque friandise, demande une seconde de calme."
      },
      {
        id: "premium-45",
        free: false,
        category: "Calme à la maison",
        title: "Chien collant pendant le télétravail",
        level: "Tous niveaux",
        duration: "10 min",
        goal: "Lui apprendre à se poser pendant que tu travailles.",
        intro: "Un bouledogue peut vite réclamer de l’attention quand tu es présent à la maison. Il ne comprend pas toujours pourquoi tu es là sans être disponible.",
        why: "Créer des moments prévisibles d’attention et de calme aide ton chien à mieux gérer les périodes où tu travailles.",
        before: [
          "Prévois une sortie ou une activité calme avant de travailler.",
          "Installe un tapis près de ton bureau.",
          "Prépare une occupation simple.",
          "Décide de pauses fixes.",
          "Ne réponds pas uniquement quand il insiste."
        ],
        progress: [
          "Jour 1 : installer le tapis près du bureau.",
          "Jour 2 : récompenser les moments couchés.",
          "Jour 3 : ajouter une occupation calme.",
          "Jour 4 : fixer deux pauses chien.",
          "Jour 5 : augmenter progressivement la durée calme."
        ],
        steps: [
          "Fais une mini activité avant de commencer.",
          "Installe ton chien sur son tapis.",
          "Récompense quand il se couche.",
          "Ignore les demandes insistantes si ses besoins sont couverts.",
          "Fais une pause prévue avant qu’il réclame trop."
        ],
        success: [
          "Ton chien se couche plus souvent près de toi.",
          "Il réclame moins pendant les appels ou le travail.",
          "Il comprend mieux les moments de pause.",
          "Il reste plus calme dans la durée.",
          "Tes journées deviennent plus prévisibles."
        ],
        mistakes: [
          "Répondre uniquement quand il insiste.",
          "Le laisser s’ennuyer toute la matinée.",
          "Demander 3 heures de calme sans apprentissage.",
          "Changer les pauses chaque jour.",
          "Le gronder parce qu’il cherche de l’attention."
        ],
        troubleshooting: [
          "S’il réclame vite, fais une activité mentale avant.",
          "S’il quitte le tapis, récompense plus souvent.",
          "S’il aboie, vérifie d’abord ses besoins.",
          "S’il s’ennuie, varie les occupations calmes.",
          "S’il progresse, espace progressivement les récompenses."
        ],
        homework: "Crée deux pauses chien fixes dans ta journée de travail."
      },
      {
        id: "premium-46",
        free: false,
        category: "Obéissance utile",
        title: "Le regard sur demande",
        level: "Débutant",
        duration: "6 min",
        goal: "Obtenir son attention avant une consigne ou une situation difficile.",
        intro: "Le regard est une base très utile : il permet de récupérer l’attention de ton chien avant un croisement, une porte, une distraction ou une consigne.",
        why: "Un chien qui te regarde est plus disponible pour écouter. Ce petit exercice peut aider dans énormément de situations du quotidien.",
        before: [
          "Prépare une petite récompense.",
          "Travaille d’abord dans un endroit calme.",
          "Choisis un mot comme “regarde”.",
          "Ne demande pas un regard trop long au départ.",
          "Récompense rapidement."
        ],
        progress: [
          "Jour 1 : friandise près du visage.",
          "Jour 2 : ajouter le mot “regarde”.",
          "Jour 3 : retirer la friandise visible.",
          "Jour 4 : tester avec une petite distraction.",
          "Jour 5 : utiliser avant une situation du quotidien."
        ],
        steps: [
          "Tiens une friandise près de ton visage.",
          "Quand il te regarde, dis “oui”.",
          "Récompense immédiatement.",
          "Ajoute le mot “regarde”.",
          "Travaille ensuite sans friandise visible."
        ],
        success: [
          "Ton chien te regarde plus rapidement.",
          "Il répond au mot “regarde”.",
          "Il récupère mieux son attention.",
          "Il reste plus connecté dehors.",
          "Tu peux utiliser l’exercice avant les distractions."
        ],
        mistakes: [
          "Dire le mot quand il est déjà trop distrait.",
          "Attendre un regard trop long au début.",
          "Utiliser le regard uniquement en situation difficile.",
          "Répéter le mot plusieurs fois.",
          "Récompenser trop tard."
        ],
        troubleshooting: [
          "S’il ne te regarde pas, rapproche la friandise de ton visage.",
          "S’il saute, baisse ton énergie.",
          "S’il détourne vite les yeux, récompense plus rapidement.",
          "S’il ignore dehors, retravaille à la maison.",
          "S’il progresse, ajoute de petites distractions."
        ],
        homework: "Récompense 10 regards spontanés par jour pendant 3 jours."
      },
      {
        id: "premium-47",
        free: false,
        category: "Obéissance utile",
        title: "Apprendre “attends”",
        level: "Intermédiaire",
        duration: "8 min",
        goal: "Apprendre à patienter quelques secondes sans bouger.",
        intro: "“Attends” est utile avant la porte, la gamelle, le trottoir, la voiture ou le canapé. C’est un petit exercice de sécurité et de calme.",
        why: "Ton chien apprend qu’il n’a pas besoin de se précipiter pour obtenir ce qu’il veut. L’attente se construit en secondes, pas en minutes au début.",
        before: [
          "Travaille dans un endroit calme.",
          "Commence avec une durée très courte.",
          "Prépare une récompense.",
          "Choisis un mot de libération comme “ok”.",
          "Ne cherche pas la perfection."
        ],
        progress: [
          "Jour 1 : attendre une demi-seconde.",
          "Jour 2 : attendre une seconde.",
          "Jour 3 : ajouter un petit pas en arrière.",
          "Jour 4 : attendre avant la porte ou la gamelle.",
          "Jour 5 : varier les lieux faciles."
        ],
        steps: [
          "Demande un assis simple.",
          "Dis “attends”.",
          "Fais une très courte pause.",
          "Récompense avant qu’il bouge.",
          "Libère avec “ok”."
        ],
        success: [
          "Ton chien bouge moins vite.",
          "Il comprend le mot “attends”.",
          "Il reste calme quelques secondes.",
          "Il attend ton signal.",
          "Tu peux l’utiliser dans plusieurs situations."
        ],
        mistakes: [
          "Demander 30 secondes dès le début.",
          "S’éloigner trop vite.",
          "Récompenser après qu’il se soit levé.",
          "Oublier le mot de libération.",
          "Le gronder s’il bouge."
        ],
        troubleshooting: [
          "S’il bouge tout de suite, réduis à une demi-seconde.",
          "S’il se couche, accepte au début si l’objectif est le calme.",
          "S’il s’excite, travaille dans un lieu plus simple.",
          "S’il anticipe la récompense, récompense plus vite.",
          "S’il progresse, augmente seulement d’une seconde."
        ],
        homework: "Travaille 5 attentes de 1 à 3 secondes par jour."
      },
      {
        id: "premium-48",
        free: false,
        category: "Sécurité",
        title: "Monter en voiture calmement",
        level: "Intermédiaire",
        duration: "10 min",
        goal: "Réduire le stress ou l’excitation autour de la voiture.",
        intro: "La voiture peut annoncer une balade, un vétérinaire, une séparation ou un long trajet. Certains chiens montent en stress dès qu’ils la voient.",
        why: "Rendre la voiture plus neutre aide ton chien à mieux vivre les trajets et à démarrer plus calmement.",
        before: [
          "Travaille voiture arrêtée.",
          "Prépare des récompenses.",
          "Ne pars pas forcément à chaque séance.",
          "Garde les premières étapes très courtes.",
          "Ne force pas ton chien à monter."
        ],
        progress: [
          "Jour 1 : approcher la voiture.",
          "Jour 2 : ouvrir la portière sans monter.",
          "Jour 3 : monter puis redescendre.",
          "Jour 4 : rester quelques secondes dedans.",
          "Jour 5 : faire un très court trajet positif."
        ],
        steps: [
          "Approche la voiture et récompense le calme.",
          "Ouvre la portière puis referme sans partir.",
          "Invite ton chien à monter avec une récompense.",
          "Fais-le redescendre calmement.",
          "Ajoute ensuite de courts trajets positifs."
        ],
        success: [
          "Ton chien approche la voiture plus calmement.",
          "Il monte avec moins de résistance.",
          "Il redescend sans agitation excessive.",
          "Les trajets deviennent moins stressants.",
          "La voiture n’annonce plus seulement une contrainte."
        ],
        mistakes: [
          "Ne prendre la voiture que pour le vétérinaire.",
          "Forcer le chien à monter.",
          "Faire un long trajet dès le début.",
          "S’énerver au moment de monter.",
          "Ignorer les signes de stress."
        ],
        troubleshooting: [
          "S’il refuse d’approcher, récompense à distance.",
          "S’il bloque à la portière, travaille sans monter.",
          "S’il tremble, raccourcis fortement la séance.",
          "S’il s’excite, baisse ton énergie.",
          "S’il est malade en voiture, demande conseil à un vétérinaire."
        ],
        homework: "Fais 3 mini-séances voiture sans vrai départ cette semaine."
      },
      {
        id: "premium-49",
        free: false,
        category: "Vie de famille",
        title: "Accueillir les enfants calmement",
        level: "Avancé",
        duration: "12 min",
        goal: "Aider ton chien à rester calme face aux mouvements et voix d’enfants.",
        intro: "Les enfants bougent vite, parlent fort et peuvent exciter ou inquiéter un chien. Il faut donc travailler à distance et poser des règles claires.",
        why: "La sécurité dépend autant de l’éducation du chien que des consignes données aux enfants. Ton chien doit avoir une zone refuge respectée.",
        before: [
          "Travaille toujours sous surveillance.",
          "Commence à distance.",
          "Prépare une zone refuge.",
          "Explique aux enfants les règles de base.",
          "Ne force jamais le contact."
        ],
        progress: [
          "Étape 1 : observer l’enfant à distance.",
          "Étape 2 : récompenser le regard calme.",
          "Étape 3 : réduire légèrement la distance.",
          "Étape 4 : ajouter un mouvement lent.",
          "Étape 5 : autoriser une interaction courte si tout est calme."
        ],
        steps: [
          "Place ton chien à distance confortable.",
          "Récompense le regard calme vers l’enfant.",
          "Laisse ton chien choisir s’il veut s’approcher.",
          "Donne-lui accès à sa zone refuge.",
          "Stoppe l’interaction au moindre inconfort."
        ],
        success: [
          "Ton chien observe plus calmement.",
          "Il récupère vite après les mouvements.",
          "Il utilise sa zone refuge.",
          "Les enfants respectent mieux ses limites.",
          "Les interactions sont plus courtes et plus sereines."
        ],
        mistakes: [
          "Forcer le contact.",
          "Laisser un enfant déranger le chien dans son panier.",
          "Ignorer les signes d’inconfort.",
          "Laisser courir autour du chien sans cadre.",
          "Penser qu’un chien gentil accepte tout."
        ],
        troubleshooting: [
          "S’il s’agite, augmente la distance.",
          "S’il fuit, laisse-le aller dans sa zone refuge.",
          "S’il saute, réduis l’excitation autour.",
          "S’il grogne, stoppe immédiatement et respecte le signal.",
          "S’il y a tension, demande l’aide d’un professionnel."
        ],
        homework: "Crée une règle simple : le panier est une zone interdite aux enfants."
      },
      {
        id: "premium-50",
        free: false,
        category: "Plans premium",
        title: "Défi 7 jours : moins d’aboiements",
        level: "Intermédiaire",
        duration: "7 jours",
        goal: "Réduire un type d’aboiement précis grâce à un plan court et mesurable.",
        intro: "On ne travaille pas tous les aboiements à la fois. Ce défi cible un seul déclencheur pour rendre les progrès visibles.",
        why: "Mesurer un comportement permet de savoir si la méthode fonctionne vraiment. Sans suivi, on peut avoir l’impression que rien ne change alors que les progrès existent.",
        before: [
          "Choisis un seul type d’aboiement.",
          "Note le nombre de fois par jour.",
          "Prépare une alternative : panier, regard ou rappel.",
          "Évite de crier.",
          "Travaille avant que ton chien soit trop excité."
        ],
        progress: [
          "Jour 1 : noter les déclencheurs.",
          "Jour 2 : limiter l’accès au déclencheur principal.",
          "Jour 3 : récompenser les micro-silences.",
          "Jour 4 : ajouter une alternative simple.",
          "Jour 5 : répéter sur les moments prévisibles.",
          "Jour 6 : réduire légèrement l’aide.",
          "Jour 7 : comparer avec le jour 1."
        ],
        steps: [
          "Choisis un aboiement précis.",
          "Note combien de fois il apparaît.",
          "Interviens plus tôt que d’habitude.",
          "Récompense les pauses de silence.",
          "Redirige vers une action calme."
        ],
        success: [
          "Les aboiements durent moins longtemps.",
          "Ton chien récupère plus vite.",
          "Tu interviens plus tôt.",
          "Le nombre d’aboiements diminue.",
          "Tu sais quelle stratégie fonctionne."
        ],
        mistakes: [
          "Vouloir supprimer tous les aboiements.",
          "Crier plus fort que le chien.",
          "Ne pas mesurer les progrès.",
          "Changer de méthode au bout d’un jour.",
          "Travailler seulement quand il est déjà débordé."
        ],
        troubleshooting: [
          "S’il aboie plus au début, garde une règle cohérente.",
          "S’il ne se calme pas, réduis l’accès au déclencheur.",
          "S’il ignore l’alternative, choisis une action plus facile.",
          "S’il progresse peu, mesure la durée et pas seulement le nombre.",
          "S’il y a peur ou agressivité, demande un avis professionnel."
        ],
        homework: "Choisis un seul aboiement à travailler et note le nombre de fois par jour."
      },
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

      {!window.matchMedia("(display-mode: standalone)").matches && (
        <button
          onClick={async () => {
            if (deferredPrompt) {
              deferredPrompt.prompt();
              await deferredPrompt.userChoice;
              setDeferredPrompt(null);
            } else {
              alert(
                "Sur mobile : ouvre le menu du navigateur puis choisis Ajouter à l’écran d’accueil."
              );
            }
          }}
          className="mt-4 rounded-2xl bg-[#101827] px-5 py-3 text-sm font-black text-white"
        >
          Installer l’application
        </button>
      )}
    </div>
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
      const reader = new FileReader();

      reader.onloadend = () => {
        const image = reader.result as string;

        setDogPhoto(image);
        localStorage.setItem("boubou-dog-photo", image);
      };

      reader.readAsDataURL(file);
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
