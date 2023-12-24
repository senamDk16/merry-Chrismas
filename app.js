document.addEventListener('DOMContentLoaded', ()=>{
    const topTop = document.querySelector(".top-top");
    const topBottom = document.querySelector(".top-bottom");
    const bottom = document.querySelector(".bottom");

    const tableFr = ['Joyeux', 'Noël']
    const tableFrTxt = [`
        Chères amies, chers amis,
        <br>
        En cette période magique et lumineuse, je vous adresse mes vœux les plus chaleureux pour un Noël empli de bonheur et de partage. Que cette journée soit le théâtre d'instantanés de joie, de rires contagieux et de moments précieux entourés de vos proches.
        <br>
        Que la magie de Noël enveloppe vos cœurs de douceur et de bienveillance, que les étoiles brillent dans vos yeux comme autant de promesses d'instants inoubliables. Puissiez-vous ressentir la chaleur de l'amitié et de l'amour, et créer des souvenirs qui illumineront vos jours à venir.
        <br>
        Que ce Noël soit l'occasion de répandre la paix, la générosité et la gratitude autour de vous. Que chaque sourire partagé devienne une étoile de plus dans le ciel de cette nuit exceptionnelle.
        <br>
        Joyeux Noël à vous et à tous ceux qui vous sont chers ! 🎄🌟
        <br>
        De la part de Senam
    `]

    const tableEng = ['Merry', 'Christmas']
    const tableEngTxt = [`
        Dear friends,
        <br>
        In this magical and luminous season, I extend my warmest wishes to you for a Christmas filled with happiness and sharing. May this day be a stage for snapshots of joy, contagious laughter, and precious moments surrounded by your loved ones.
        <br>
        May the magic of Christmas envelop your hearts with tenderness and kindness, and may the stars shine in your eyes as promises of unforgettable moments. May you feel the warmth of friendship and love, creating memories that will brighten your days ahead.
        <br>
        May this Christmas be an opportunity to spread peace, generosity, and gratitude around you. May each shared smile become another star in the sky of this exceptional night.
        <br>
        Merry Christmas to you and all those dear to you! 🎄🌟
        <br>
        Best regards,
        Senam
    `]

    topTop.innerHTML = tableFr[0]
    topBottom.innerHTML = tableFr[1]
    bottom.innerHTML = tableFrTxt[0]

    document.querySelector('#en').addEventListener('click', ()=>{
        
        topTop.innerHTML = tableEng[0]
        topBottom.innerHTML = tableEng[1]
        bottom.innerHTML = tableEngTxt[0]


    })
    document.querySelector('#fr').addEventListener('click', ()=>{
        topTop.innerHTML = tableFr[0]
        topBottom.innerHTML = tableFr[1]
        bottom.innerHTML = tableFrTxt[0]

    })
})