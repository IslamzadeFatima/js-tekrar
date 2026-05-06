let eded = ['01', '02', '03']
let title = ['Choose a Document Type', 'Answer Simple Questions', 'Download or Edit Instantly']
let text =['Select from NDA, Contract, Privacy Policy, and more', 'Our AI asks just what it needs to know about your business', 'Get your document ready to use or customize further']

for (let i = 0; i < title.length; i++) {
    cards.innerHTML += 
    `
        <div class="relative flex flex-col gap-5 bg-[#171717] hover:bg-[#464646] transition-all border border-gray-400 hover:border-[#f14627] p-10 rounded-xl w-full lg:w-1/3">
            <div class="hidden lg:block absolute top-12 -right-4 w-10 h-1 bg-gradient-to-r from-red-500/40 to-transparent"></div>
            <h1 class="text-[#b1060688] text-6xl font-bold">${eded[i]}</h1>
            <h4 class="text-white text-lg">${title[i]}</h4>
            <p class="text-gray-400">${text[i]}</p>
        </div>
    `
}