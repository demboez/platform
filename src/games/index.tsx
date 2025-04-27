import { GameBundle } from 'gamba-react-ui-v2'
import React from 'react'

export const GAMES: GameBundle[] = [
  // {
  //   id: 'example',
  //   meta: {
  //     background: '#00ffe1',
  //     name: 'Example',
  //     image: '#',
  //     description: '',
  //   },
  //   app: React.lazy(() => import('./ExampleGame')),
  // },
  {
    id: 'dice',
    meta: {
      background: '#ff6490',
      name: 'קוביות',
      image: '/games/dice.png',
      description: `
        "משחק הקובייה מאתגר את השחקנים לנחש את תוצאת ההטלה עם טוויסט ייחודי. בחר מספר ושאף לגלגל תוצאה נמוכה ממנו כדי לנצח. שינוי הבחירה שלך משפיע על סכום הזכייה הפוטנציאלי, ומאזן בין סיכון לתגמול לחוויית משחק מרתקת."
      `,
    },
    app: React.lazy(() => import('./Dice')),
  },
  {
    id: 'slots',
    meta: {
      background: '#5465ff',
      name: 'Slots',
      image: '/games/slots.png',
      description: `
        מכונות המזל הן התגלמות המזל וההתרגשות. סובבו את הסלילים, התאימו סמלים וזכו בפרסים, כאשר כל הזכיות האפשריות מוצגות בצורה ברורה מראש. זהו משחק הוגן, מהנה וסוחף, שמביא את חוויית הקזינו הקלאסית ישירות אל העולם הדיגיטלי.
      `,
    },
    app: React.lazy(() => import('./Slots')),
  },
  {
    id: 'hilo',
    meta: {
      name: 'HiLo',
      image: '/games/hilo.png',
      description: `
        גבוה או נמוך הוא משחק של ראיית הנולד ומזל, המאתגר את השחקנים לנחש האם הקלף הבא יהיה גבוה יותר או נמוך יותר. בצעו רצף של ניחושים נכונים כדי להגדיל את זכייתכם, והחליטו מתי לעצור ולפדות את הרווחים בשיאם.
      `,
      background: '#ff4f4f',
    },
    props: { logo: '/logo.svg' },
    app: React.lazy(() => import('./HiLo')),
  },
  {
    id: 'mines',
    meta: {
      name: 'Mines',
      description: `
        מתחת לריבועים מסתתר כסף. ככל שתחשפו יותר ריבועים, סכום הפרס יגדל – אבל היזהרו מחמש המוקשים החבויים. אם תפגעו באחד מהם, תאבדו הכל. תוכלו לפדות את הזכייה בכל רגע שתרצו.
      `,
      image: '/games/mines.png',
      background: '#8376ff',
    },
    app: React.lazy(() => import('./Mines')),
  },
  {
    id: 'roulette',
    meta: {
      name: 'Roulette',
      image: '/games/roulette.png',
      description: `
        רולטה מחייה את משחק סיבוב הגלגל הקלאסי עם טאץ' דיגיטלי מודרני. הימרו על היכן שהכדור ייעצר וצפו כיצד הגלגל קובע את גורלכם. עם חוקים פשוטים והזדמנות לזכיות גדולות, רולטה היא משחק מזל על-זמני.
      `,
      background: '#1de87e',
    },
    app: React.lazy(() => import('./Roulette')),
  },
  {
    id: 'plinko',
    meta: {
      background: '#7272ff',
      image: '/games/plinko.png',
      name: 'Plinko',
      description: `
       פינקו הוא משחק שבו מטילים דיסקיות על לוח עם יתדות, והן נופלות באופן אקראי לחריצים עם סכומי זכייה משתנים. כל הטלה משלבת מתח ואסטרטגיה, מה שהופך את פינקו למשחק מזל מהנה וממכר.
⚠️ נמצא בפיתוח. ייתכן שהתוצאות המוצגות אינן נכונות. ⚠️
      `,
    },
    app: React.lazy(() => import('./Plinko')),
  },
  {
    id: 'crash',
    meta: {
      background: '#de95e8',
      image: '/games/crash.png',
      name: 'Crash',
      description: `
      המריאו אל עבר הזכייה: נבא את יעד המכפיל וצפה בטיל שועט לשמים. אם הטיל יגיע ליעד או יפרוץ אותו – תזכה בפרס הגדול. אך אם יתרסק לפני כן – תאבד את ההימור. האם תדע מתי להמר ומתי לעצור? משחק של אומץ, מתח וזכיות מסחררות.
      `,
    },
    app: React.lazy(() => import('./CrashGame')),
  },
  {
    id: 'blackjack',
    meta: {
      background: '#084700',
      image: '/games/blackjack.png',
      name: 'BlackJack',
      description: `
        בלאקג'ק במהדורה אלגנטית ומהירה: אתה והדילר מקבלים שני קלפים בלבד. השג בלאקג'ק טהור (21 בשני קלפים) וזכה פי 2.5 מההימור, או הכה את הדילר מבלי לעבור את 21 כדי להכפיל את זכייתך. תיקו או תוצאה נמוכה יותר יובילו להפסד. חוויית קזינו קלאסית, בקצב מהיר וללא סיבוכים
      `,
    },
    app: React.lazy(() => import('./BlackJack')),
  },
]
