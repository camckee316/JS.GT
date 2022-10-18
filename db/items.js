var items = [
  {
    _unit: "Pokeball",
    _desc: "A device for catching wild Pokemon. It's thrown at a Pokemon, comfortable encapsulating its target",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. ",
    _loc: "200c,Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "Sometimes drops from Sentret and Caterpie, Obtained from Rock Present."
  },
  {
    _unit: "Great Ball",
    _desc: "A good,high-performance Poke Ball that provides a higher",
    _sell: "Yes the item is sellable",
    _buy: "Yes you can buy thei item from other players",
    _loc: "600c Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildheaven/Strongwater/Onderblade/Grayview PokeMarts",
    _other: "One can be found on the ground in the Grand Garden Maze, East of Eastbourne City"
  },
  {
    _unit: "Ultra Ball",
    _desc: "An ultra-high-performance Poke Ball that provides a higher",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. ",
    _loc: "1200c, Sunrock Desert Travelling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Strongwater/Onderblade/Grayview PokeMarts.",
    _other: "Can also get 5 as a prize for defeating 10 Sunkern in the Eastbourne North Farmlands."
  },
  {
    _unit: "Master Ball",
    _desc: "The best Poke Ball with the ultimate level of performance. With it, you will catch any wild Pokemon without fail.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. ",
    _loc: "Login Streak",
    _other: "-"
  },
  {
    _unit: "Premier Ball",
    _desc: "A somewhat rare Poke Ball that was made as a commemorative item used to celebrate an event of some sort.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts. in the PokeMart",
    _loc: "?",
    _other: "?"
  },
  {
    _unit: "Potion",
    _desc: "A spray-type medicine for treating of wounds. It can be used to restore 20 HP to an injured Pokemon",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. ",
    _loc: "300c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Travelling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Strongwater/Onderblade/Grayview PokeMarts",
    _other: "?"
  },
  {
    _unit: "Super Potion",
    _desc: "A spray-type medicine for treating wounds. It can be used to restore 50 HP to an injured Pokemon",
    _sell: "Yes the item is sellable",
    _buy: "Yes you can buy the item from players.",
    _loc: "700c, Blackfell/Wildhaven/Strongwater/Grayview PokeMarts.",
    _other: "One can be found in the Grand Island Maze."
  },
  {
    _unit: "Hyper Potion",
    _desc: "A spray-type medicine for treating wounds. It can be used to restore 200 HP to an injured Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yess you can buy the item from other players.",
    _loc: "1200c, Wildhaven/Strongwater/Grayview PokeMarts.",
    _other: "?"
  },
  {
    _unit: "Antidote",
    _desc: "A spray-type medicine for poisoning. It can be used once to lift the effects of being poisoned from a Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "100c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Travelling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Strongwater PokeMarts.",
    _other: "?"
  },
  {
    _unit: "Revive",
    _desc: "A medicine that can revive fainted Pokemon. It also restores half of a fainted Pokemones maximum HP.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "1500c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Travelling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Strongwater/Grayview PokeMarts.",
    _other: "?"
  },
  {
    _unit: "Max Revive",
    _desc: "A medicine that can revive fainted Pokemon. It also fully restores a fainted Pokemones maximum HP.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "4000c, Dorocoast/Blackfell/Wildhaven/Strongwater/Grayview PokeMarts.",
    _other: "?"
  },
  {
    _unit: "No Experience Stone",
    _desc: "This prevents your Pokemon from gaining experience.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "500c, Bluegum/Darlinghurst/Eastbourne/Wildhaven/Grayview PokeMarts",
    _other: "?"
  },
  {
    _unit: "Fire Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon evolve. The stone has a fiery orange heart.",
    _sell: "Yes the item is sellable",
    _buy: "Yes you can buy the the item from other players.",
    _loc: "1500c, Bluegum PokeMart, Grayview Pokemart",
    _other: "Pokemon that evolve with Vulpix, Growlithe, Eevee, Pansear"
  },
  {
    _unit: "Water Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "1500c, Darlinghurst Pokemart, Grayview Pokemart",
    _other: "Pokemon that evolve with Poliwhirl, Shellder, Staryu, Eevee, Lombre, Panpour"
  },
  {
    _unit: "Thunder Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon evolve. It has a distinct thunderbolt pattern",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "1500c, Newpine PokeMart, Grayview Pokemart",
    _other: "Pokemon that evolve with Eevee, Eelektrik"
  },
  {
    _unit: "Leaf Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon evolve. It has an unmistakable leaf pattern.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. ",
    _loc: "1500c, Oldpine PokeMart, Grayview Pokemart",
    _other: "Pokemon that evolve with Gloom, Weepinbell, Nuzleaf, Pansage"
  },
  {
    _unit: "Sun Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon evovlve. It burn as red as the evening sun.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "1500c, Sandmarsh PokeMart, Grayview Pokemart",
    _other: "Pokemon that evolve with Gloom, Sunkern, Cottonee, Petilil, Helioptile"
  },
  {
    _unit: "Dawn Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon evolve. It sparkles like a glittering eye",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. ",
    _loc: "1500c, Dorocoast PokeMart, Grayview Pokemart",
    _other: "25 Prize Tickets Sandmarsh Prize Room, Pokemon that evolve with Snorunt(Female), and Kirlia(Male)"
  },
  {
    _unit: "Dusk Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon evolve. It holds shadows as dark as can be.",
    _sell: "Yes the item can is sellable",
    _buy: "Yes you can buy thei item from other players.",
    _loc: "1500c, Blackfell Island PokeMart, Grayview Pokemart",
    _other: "25 Prize Tickets Sandmarsh Prize Room, Defeat 200 Sunkern in Eastbourne North Farmlands, Pokemon that evolve with Murkrow, Misdreavus, Lampent, Doublade."
  },
  {
    _unit: "Moon Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon evolve. It is as black as the night sky.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "1500c, Eastbourne PokeMart, Grayview Pokemart",
    _other: "Pokemon that evolve with Nidorina(female), Nidorino(male), Clefairy, Jigglypuff, Skitty, Munna, "
  },
  {
    _unit: "Shiny Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon evolve. It shines with a dazzling light.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. ",
    _loc: "1500c, Wildhaven PokeMart, Grayview Pokemart",
    _other: "25 Prize Tickts Sandmarsh Prize Room, Pokemon that evolve with Togetic, Roselia, Minccino, Floette"
  },
  {
    _unit: "Oval Stone",
    _desc: "A peculiar stone that can make certain species of Pokemon evolve. It's as round as a Pokemon Egg.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. ",
    _loc: "1500c Strongwater PokeMart",
    _other: "25 Prize Tickets Sandmarsh Prize Room, Pokemon that evolve with Happiny"
  },
  {
    _unit: "Magmarizer",
    _desc: "A box packed with a tremendous amount of magma energy. It's loved by a certain Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. ",
    _loc: "20000c, Team Royal Black Market (Sunrock Desert E2)",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Electirzer",
    _desc: "A box packed with a tremendous amount of electric energy, It's loved by a certain Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c, Team Royal Black Market (Sunrock Desert E2)",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Reaper Cloth",
    _desc: "A cloth imbued with horrifyingly strong spiritual energy. It's loved by a certain Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c, Team Royal Black Market (Sunrock Desert E2",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Protector",
    _desc: "A protective item of some sort. It is extremely stiff and heavy. It's loved by a certain Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c, Team Royal Black Market (Sunrock Desert E2)",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Deep Sea Tooth",
    _desc: "An item to be held by Clamperl. This fang gleams a sharp silver and raises the holderes Sp. Atk stat.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c, Team Royal Black Market (Sunrock Desert E2)",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Deep Sea Scale",
    _desc: "An item to be held by Clamperl. This scale shines with a faint pink and raises the holderes Sp. Def stat.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c Team Royal Black Market (Sunrock Desert E2)",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Up Grade",
    _desc: "Transparent device somehow filled with all sorts of data. It was produced by Silph Co.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c, Team Royal Black Market (Sunrock Desert E2)",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Dubious Disc",
    _desc: "A transparent device overflowing with dubious data. Its producer is unknown.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c, Team Royal Black Market (Sunrock Desert E2)",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Prism Scale",
    _desc: "A mysterious scale that causes a certain Pokemon to evolve. It shines in rainbow colors.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c, Team Royal Black Market (Sunrock Desert E2)",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Razor Fang",
    _desc: "An item to be help by a Pokemon. It may make foes and allies flinch when the holder inflicts damage",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c, Team Royal  Black Market, Grayview City PurpleRidge Apt. Rm4 Lvl 30 Seviper required",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Razor Claw",
    _desc: "An item to be held by a Pokemon. When the holder successfully inflicts damage, the target may also flinch.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "20000c, Team Royal Black Market (Sandmarsh Desert E2), Grayview City PurpleRidge Apt. Rm4 Lvl 30 Zangoose required.",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Metal Coat",
    _desc: "An item to be held by a Pokemon. It is a special metallic film that can boost the power of Steel-type moves.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "9000c, NPC in front of sign at top of Eastbourne City",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Dragon Scale",
    _desc: "A very tough and inflexible scale. Dragon-type Pokemon may be holding this item when caught.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts. .",
    _loc: "9000c, NPC in front of sign at top of Eastbourne City",
    _other: "25 Prize Tickets Sandmarsh Prize Room"
  },
  {
    _unit: "Ice Stone",
    _desc: "An enchanted rock that is chipped off of the Ice Stone. Eevee seems to really like this rock.",
    _sell: "No the item is sellable",
    _buy: "No the item is not buyable in the pokemarts..",
    _loc: "Winter Event 2017/2018",
    _other: "Attach to Eevee and trade"
  },
  {
    _unit: "Moss Stone",
    _desc: "An enchanted rock that is chipped off of the Moss Stone. Eevee seems to really like this rock.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts..",
    _loc: "Raffles, Login Streak, Easter Event 2020",
    _other: "Attach to Eevee and trade"
  },
  {
    _unit: "Ev Reducer",
    _desc: "This item reduces the Effort Values (EV's) by 10 points",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Sometimes dropped by wild Pidgey, Weedle, Lotad, and Spinarak when defeated",
    _other: "~"
  },
  {
    _unit: "Diner Coupon",
    _desc: "A small coupon that allows you enter any diner.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Sometimes dropped by wild Wingull when defeated.",
    _other: "Can also get 20 as a prize for defeating 50 Sunkern in the Eastbourne North Farmlands."
  },
  {
    _unit: "Rock Present",
    _desc: "A small container that is hard as a rock. It is sometimes dropped by cave Pokemon",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Sometimes dropped by wild Zubat when defeated.",
    _other: "~"
  },
  {
    _unit: "Everstone",
    _desc: "An item to be held by a Pokemon. A Pokemon holding this peculiar stone is prevented from evolving.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Given to you by Mack, owner of Darlinghurst Ranch + Tournament House (Speak to him in your parents' house in Bluegum Town. Cost is 5000 each.).",
    _other: "This item, when attached to a female Pokemon, will give a 50% chance of passing down its nature when breeding in the daycare."
  },
  {
    _unit: "DNA Serum",
    _desc: "A strange concoction made from the ground up marsh plants around Sandmarsh and Dorocoast.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Sandmarsh, Dorocoast PokeMarts",
    _other: "~"
  },
  {
    _unit: "Helix Fossil",
    _desc: "A fossil from a prehistoric Pokemon that once lived in the sea. It might be a piece of a seashell.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Choose between this and Dome Fossil in A4, or get multiple from the Desert Den minigame, Sunrock Desert A1 Quest Information: Required for the \"Fossils of Fortune\" quest.",
    _other: "~"
  },
  {
    _unit: "Dome Fossil",
    _desc: "A fossil from a prehistoric Pokemon that once lived in the sea. It could be a shell or carapace.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Choose between this and Helix Fossil in A4, or get multiple from the Desert Den minigame, Sunrock Desert A1 Quest Information: Required for the \"Fossils of Fortune\" quest.",
    _other: "~"
  },
  {
    _unit: "Old Amber",
    _desc: "A piece of amber that still contains the genetic material of an ancient Pokemon. Ites clear with a tawny, reddish tint.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Desert Den minigame, Sunrock Desert A1 Quest Information: Required for the \"Fossils of Fortune\" quest.",
    _other: "~"
  },
  {
    _unit: "Root Fossil",
    _desc: "A fossil from a prehistoric Pokemon that once lived in the sea. It looks as if it could be part of a plant's root.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Desert Den minigame, Sunrock Desert A1 Quest Information: Required for the \"Fossils of Fortune\" quest.",
    _other: "~"
  },
  {
    _unit: "Claw Fossil",
    _desc: "A fossil from a prehistoric Pokemon that once lived in the sea. It appears to be a fragment of a claw.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Desert Den minigame, Sunrock Desert A1 Quest Information: Required for the \"Fossils of Fortune\" quest.",
    _other: "~"
  },
  {
    _unit: "Nugget",
    _desc: "A nugget of the purest gold that gives off a lustrous gleam in direct light. It can be sold at a high price to shops.Can be exchanged for 5k at the Oldpine Police Station.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Desert Den minigame, Sunrock Desert A1",
    _other: "~"
  },
  {
    _unit: "Pearl",
    _desc: "A rather small pearl that has a very nice silvery sheen to it. It can be sold cheaply to shops.Can be exchanged for 20 Pokefood at Old Dorocoast Safari gatehouses.",
    _sell: "Yes the item is sellable"
    , _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Desert Den minigame, Sunrock Desert A1",
    _other: "~"
  },
  {
    _unit: "Rare Bone",
    _desc: "A rare bone theat is extremely valuable for the study of Pokemon archeology. It can be sold for a high price to shops. 10 of these are required ot trade with an NPC next to the Desert Den to obtain the Tepig Plushie.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Desert Den minigame, Sunrock Desert A1",
    _other: "~"
  },
  {
    _unit: "Compact Badge",
    _desc: "The badge given for defeating the first Gym Leader in the Region",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Darlinghurst Gym  Required for the \"Earn your first Badge!\" quest.",
    _other: "~"
  },
  {
    _unit: "Water Badge",
    _desc: "A badge given by the second leader of the region. The gym leader was a fan of Cerulean City.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Newpine Gym",
    _other: "~"
  },
  {
    _unit: "Electric Badge",
    _desc: "A badge inspired from a distant electric gym. In fact, it looks like the gym leader stole it from there.",
    _sell: "No the item is not sellable",
    _buy: " No the item is not buyable in the pokemarts.",
    _loc: "Eastbourne Gym",
    _other: "~"
  },
  {
    _unit: "Grass Badge",
    _desc: "A badge that appears to have been copied from a grass gym in a distant land.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained after defeating Team Royal aboard blue boat in Dorocoast Docks",
    _other: "~"
  },
  {
    _unit: "Concentration Badge",
    _desc: "A badge that is clearly a replica of the one Sabrina from Saffron gives out",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Wildheaven Gym",
    _other: "~"
  },
  {
    _unit: "Flame Badge",
    _desc: "Forged in the distant fires of Cinnabar Island, this badge is treasured by fire trainers.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Defeat Pyrolius (Strongwater Gym Leader) at the Snowy Grotto",
    _other: "~"
  },
  {
    _unit: "High-Quality Magikarp",
    _desc: "A special Pokeball that contains a very high-quality Magikarp! A total of 4 are needed; 2 for the \"Grand Theft Magikarp\" quest, and 2 later on in the \"Justice will be served!\" quest.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Grand Theft Magikarp: The first is obtained from an NPC in Bluegum Caves. Once you have this, you can get the second from an NPC in the Bluegum PokeMart. Justice will be served!: The first is obtained after completing the \"Birthday Wishes: Friends are Forever\" quest, and the 2nd is then obtained from an NPC just under the lake on Route 4. 2 of this item are required for each of the following quests: \"Grand Theft Magikarp\", \"Justice will be served!\".",
    _other: "~"
  },
  {
    _unit: "Newpine Key",
    _desc: "A set of keys that opens a forbidden box that is in a house in Newpine. A bad vibe emits from them. You'll need 2 of these to complete the objective they are intended for.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "House of Jars (Newpine Town). Each on is hidden in a jar (confirmation required as to whether it's random jars or specific jars)",
    _other: "~"
  },
  {
    _unit: "Suspicious Package",
    _desc: "No one knows what is in this box but it was acquired under suspicious means.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained from an NPC when leaving Newpine Town (after beating the Newpine Gym).",
    _other: "~"
  },
  {
    _unit: "Retired Arcanine",
    _desc: "An Arcanine that served in the Police Force for over 60 years. This particular one never had an official owner so it is now lonely.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "First, you need to have caught a Growlithe. Then, go to the Police Officer NPC at the top left of the Oldpine Jail Fields map (accessible from East Oldpine Town). He'll give you this item, which you then take to the quest-giver. This item is required for each of the following quests: \"Birthday Wishes: Friends are Forever\", \"Justice will be served!\".",
    _other: "~"
  },
  {
    _unit: "Lost Tepig",
    _desc: "A little Tepig that was found wandering the East Eastbourne Farmlands",
    _sell: "No the item is not sellable",
    _buy: "No the ite is not buyable",
    _loc: "Found wandering about Eastbourne East Farmlands. Once it's standing in front of you, talk to it, and you'll get its Poke Ball. This item is required for each of the following quests: \"The Lost and Found Tepig\".",
    _other: "~"
  },
  {
    _unit: "Fresh Water",
    _desc: "Water with a high mineral content. When consumed, it restores 50 HP to an injured Pokemon. 3 of these items are required for the \"Thirsty Desert Pokemon\" quest. However, it is advised to buy 6 at least in total, as there are also three Team Royal grunts in need of this item, who will reward you later on for helping them.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "200c, all gatehouse vending machines",
    _other: "~"
  },
  {
    _unit: "Soda Pop",
    _desc: "A highly carbonated soda drink. When consumed, it restores 60 HP to an injured Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "300c, all gatehouse vending machines",
    _other: "~"
  },
  {
    _unit: "Lemonade",
    _desc: "A very sweet and refreshing drink. When consumed, it restores 80 HP to an injured Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "350c, all gatehouse vending machines",
    _other: "~"
  },
  {
    _unit: "Cactus Pollen",
    _desc: "A small bag filled with cactus pollen",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Given to you by a female scientist NPC in Sunrock Desert B1. This item is required for each of the following quests: \"Finding a Needle in a Cactus Stack\"",
    _other: "~"
  },
  {
    _unit: "Ball Trinket",
    _desc: "A decorative trinket that resembles a tiny version of a type of Poke Ball.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Speak to Professor Sycamore in Sunrock Desert E4",
    _other: "~"
  },
  {
    _unit: "Diamond",
    _desc: "A rare gem that is desired for weddings. It looks important. Once obtained and given to the Team Royal Grunt blocking a cave entrance in Sunrock Desert E2, the Team Royal Black Market will be unlocked. This Diamond is also referenced during the Wedding chapter (after 4th gym badge).",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "After speaking to Professor Sycamore in the desert (E4), an NPC Captain appears in Sunrock Desert C4, who gives you directions towards the Diamond. \"1 left\" translates as 1 map to the left. The directions vary per player, so the item can be located in different areas for different people. Talk to the flag on the map you end up at.  This item is required for each of the following quests: \"Diamond in the Rough\"",
    _other: "~"
  },
  {
    _unit: "Sphere Stone Case",
    _desc: "An odd case found in the desert. It looks like it can hold stones, and you may regret trying to sell this later on.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "After speaking to Professor Sycamore in the desert (E4), an NPC Captain appears in Sunrock Desert C4, who gives you directions towards the Diamond. \"1 left\" translates as 1 map to the left. The directions vary per player.",
    _other: "Talk to the flags."
  },
  {
    _unit: "Bronze Bell",
    _desc: "An old bell found in a desert treasure chest. You may regret selling this at some later point in time.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "After speaking to Professor Sycamore in the desert (E4), an NPC Captain appears in Sunrock Desert C4, who gives you directions towards the Diamond. \"1 left\" translates as 1 map to the left. The directions vary per player, so the item can be located in different areas for different people. Talk to the flag on the map you end up at.",
    _other: "~"
  },
  {
    _unit: "Game Ticket",
    _desc: "A small ticket that lets you play a single round of any minigame in Orden.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Trade a Big Nugget for 40 at Sandmarsh Prize Room. Can also get 30 as a prize for defeating 25 Sunkern in the Eastbourne North Farmlands.",
    _other: "~"
  },
  {
    _unit: "Prize Ticket",
    _desc: "A prize ticket that you win from games in Sandmarsh Town. You can redeem them for prizes.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Trade a Big Nugget for 30 at Sandmarsh Prize Room. Random amount (up to 10) from non-Shiny Slowpoke in Slowpoke Staredown minigame, Sandmarsh Town. Also obtained from Magikarp Luck and Diglett Rush minigames in Sandmarsh Town.",
    _other: "~"
  },
  {
    _unit: "Big Nugget",
    _desc: "A big nugget of pure gold that gives off a lustrous gleam. It can be sold at a high price to shops.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Slowpoke Staredown minigame, Sandmarsh Town (Given by the legendary Shiny Slowpoke).",
    _other: "~"
  },
  {
    _unit: "PP Up",
    _desc: "A medicine that can slightly raise the maximum PP of a single move that has been learned by the target Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Team Royal Black Market (Sunrock Desert E2)",
    _other: "25 Prize Ticket Sandmarsh Prize Room"
  },
  {
    _unit: "PP Max",
    _desc: "A medicine that can optimally raise the maximum PP of a single move that has been learned by the target Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the is buyable",
    _loc: "2500c, Team Royal Black Market",
    _other: "25 Prize Tickets;Sandmarsh Prize Room"
  },
  {
    _unit: "Moon Relic",
    _desc: "An ancient relic that has the image of a moon in the front and a Mew in the back. AKA 1st Relic",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Found in Route 12 Tree of Illusions. Quest Information: Required for each of the following quests: \"Relic of the Moon\", \"Ancient Relics in Modern Times\".",
    _other: "~"
  },
  {
    _unit: "Shine Candle",
    _desc: "An eerie candle whose light repels spiders.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained once you've obtained the Moon Relic, again from the Tree of Illusions. Required for each of the following quests: \"Ancient Relics in Modern Times\".",
    _other: "~"
  },
  {
    _unit: "Sun Relic",
    _desc: "An ancient relic depicting a sun on one side and a Mewtwo on the other.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Found in Grayview Cave's Cave of Spiders. Required for each of the following quests: \"Relic of the Sun\", \"Ancient Relics in Modern Times\".",
    _other: "~"
  },
  {
    _unit: "Strange Orb",
    _desc: "A mysterious Life Orb that was altered by Mewtwo. No one knows what it does now.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained once you've obtained the Sun Relic, again from the Cave of Spiders.",
    _other: "~"
  },
  {
    _unit: "Pokefood",
    _desc: "A delicious treat in a picnic basket that is adored by safari Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "20c, from either Old Dorocoast Safari Gatehouse (or 10c if you are using Premium Account)",
    _other: "~"
  },
  {
    _unit: "Stolen Police Pidgey",
    _desc: "A Cherish Ball containing a shiny Pidgey that was stolen from the Police on Route 7. Once obtained, give it to the policeman NPC in Dorocoast Pokemon Center.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "Obtained from Team Royal once defeated aboard the SS SeaSalt (Dorocoast Docks). Required for each of the following quests: \"Wanted Poster: Stolen Shiny Pidgey\"",
    _other: "~"
  },
  {
    _unit: "Kidnapped King Pidgeot",
    _desc: "A Cherish Ball containing the Pidgeot that Team Royal stole. Give it to Oliver.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained from Team Royal once defeated aboard the SS SeaSalt (Dorocoast Docks).",
    _other: "~"
  },
  {
    _unit: "Ion Relic",
    _desc: "An ancient relic that has a picture of a thunderbolt in the front, and a Zapdos in the back. This is commonly referred to as the 3rd Relic.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Found in Raian's House, Eastbourne Gardens, after the wedding. Required for each of the following quests: \"Ancient Relics in Modern Times\"",
    _other: "~"
  },
  {
    _unit: "Air Mail",
    _desc: "~",
    _sell: "No the item is not sellable",
    _buy: "No the is not buyable",
    _loc: "Obtained from the quest giver on Dorocoast Docks. Required for each of the following quests: \"Wingull Delivery Service\".",
    _other: "~"
  },
  {
    _unit: "Tropic Mail",
    _desc: "~",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obatined from Jane in Bluegum Town, recipient of the Air Mail. Required for each of the following quests: \"Wingull Delivery Service\".",
    _other: "~"
  },
  {
    _unit: "RSVP Mail",
    _desc: "Stationery designed to allow you to extend an invitation to the recipient. Have a Pokemon hold it for delivery.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained from Dwayne in Eastbourne Gardens, the recipient of the Tropic Mail. Required for each of the following quests: \"Wingull Delivery Service\".",
    _other: "~"
  },
  {
    _unit: "Thanks Mail",
    _desc: "Stationery designed to make it easy for you to express thanks. Have a Pokemon hold it for delivery.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained from Mack in the Starters League, the recipient of the RSVP Mail.  Required for each of the following quests: \"Wingull Delivery Service\".",
    _other: "~"
  },
  {
    _unit: "Energy Food",
    _desc: "A case filled with delicious high-energy Pokemon snacks.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained from the Sandmarsh cookie baker in Sandmarsh Town PokeMart, the recipient of the Thanks Mail. Required for each of the following quests: \"Wingull Delivery Service\".",
    _other: "~"
  },
  {
    _unit: "Sea Scale",
    _desc: "A beautiful and light scale collected from Finneon. 50 of this item are required to create a Sea Bell.",
    _sell: "No the is not sellable",
    _buy: "No the is not buyable",
    _loc: "Sometimes obtained from wild Finneon when defeated. Required for each of the following quests: \"The Child of the Sea\".",
    _other: "~"
  },
  {
    _unit: "Sea Bell",
    _desc: "A beautiful and light bell made from Sea Scales. It sounds like the ring of the ocean.",
    _sell: "No the is not sellable",
    _buy: "No the is not buyable",
    _loc: "There is a well in the top right of the map of the main town area of Sea Fairy Island. Talk to this well once you've obtained 50 Sea Scales. Required for each of the following quests: \"The Child of the Sea\".",
    _other: "~"
  },
  {
    _unit: "Beach Glass",
    _desc: "Pieces of colored glass that have been smoothed by the sand and sea. 20 of this item are required to create a Glass Flute.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained by walking over sea shells on the Sea Fairy Island (main town area) beach. Note that to reset them you need to go to the Sea Fairy Forest, then return to the beach to find more of this item. Required for each of the following quests: \"The Secret of the Sea Legend\".",
    _other: "~"
  },
  {
    _unit: "Glass Flute",
    _desc: "A glass flute designed differently from the type made from volcanic ash.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Formed of 20 Beach Glass by the Psychic in the \"Discoverer's\" house on Sea Fairy Island. Required for each of the following quests: \"The Secret of the Sea Legend\".",
    _other: "~"
  },
  {
    _unit: "Hypnotic Orb",
    _desc: "Misdreavus carry these around to help put people to sleep. They are quite rare. 8 of these are required for the \"The Zombie`s Apocalypse\" quest.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Sometimes dropped by wild Misdreavus when defeated. Required for each of the following quests: \"The Zombie`s Apocalypse\", \"The Hunt for the Honey Mushroom\".",
    _other: "~"
  },
  {
    _unit: "Tiny Mushroom",
    _desc: "A very small and rare mushroom. It's popular with a certain class of collectors and sought out by them. 6 of these are required for the \"The Zombie`s Apocalypse\" quest.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Sometimes dropped by wild Paras when defeated.Required for each of the following quests: \"The Zombie`s Apocalypse\", \"The Hunt for the Honey Mushroom\".",
    _other: "~"
  },
  {
    _unit: "Very Bitter Powder",
    _desc: "So bitter that it could wake a person out of their sleep. This only works on humans, not Pokemon. This item requires 2 Tiny Mushrooms",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Made from 2 Tiny Mushrooms, by an NPC in the Mushroom House of Eastbourne Town. Quest Information: Required for each of the following quests: \"The Zombie`s Apocalypse\", \"The Hunt for the Honey Mushroom\".",
    _other: "~"
  },
  {
    _unit: "Moomoo Milk",
    _desc: "A bottle of highly nutritious milk. When consumed, it restores 100 HP to an injured Pokemon.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Dropped by wild Miltank when defeated. Required for each of the following quests: \"The Zombie`s Apocalypse\", \"The Hunt for the Honey Mushroom\".",
    _other: "~"
  },
  {
    _unit: "Awful Tasting Remedy",
    _desc: "A medicine so awful tasting that it will snap anyone out of a trance. 8 of these are required for the \"The Zombie`s Apocalypse\" quest. Each requires 1 Hypnotic Orb, 1 Very Bitter Powder and 1 Moomoo Milk.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained from the kitchen nurse NPC in Blackfell Island's Nurse's House when given the ingredients above.",
    _other: "Required for each of the following quests: \"The Zombie`s Apocalypse\", \"The Hunt for the Honey Mushroom\"."
  },
  {
    _unit: "Putrid Ball of Gunk",
    _desc: "A rotten and pulsating blob of gunk that is possessed. Get rid of it, yuck!",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "After curing all the zombies and speaking to the quest-giving nurse, an NPC outside the Nurse's House will give you clues to its location (like the Diamond, it varies per person).",
    _other: "Required for each of the following quests: \"The Zombie`s Apocalypse\", \"The Hunt for the Honey Mushroom\"."
  },
  {
    _unit: "Honey Mushroom",
    _desc: "Rare and sweet, this mushroom can treat very sick Pokemon. They will willingly eat it, too!",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Given as a reward for completing the \"The Zombie's Apocalypse\" quest. Required for each of the following quests: \"The Hunt for the Honey Mushroom\".",
    _other: "~"
  },
  {
    _unit: "Anti-Heat Orb",
    _desc: "It is a Flame Orb that malfunctioned. Instead of extending heat it creates a barrier that blocks it.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Given as a reward for completing the \"Feeding the Fire\" quest. Required for each of the following quests: \"Ancient Relics in Modern Times\".",
    _other: "~"
  },
  {
    _unit: "Ghostly Soul",
    _desc: "A strange stone given by a ghost lady. Haunter seems to be attracted to it.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Given by an elderly lady NPC after obtaining the Anti-Heat Orb, Moon Relic, Sun Relic, and Ion Relic.",
    _other: "~"
  },
  {
    _unit: "Wisp Relic",
    _desc: "An ancient relic that has a flame in the front and a Moltres in the back. This is commonly referred to as the 4th Relic.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Found in Blackfell Caverns, Tomb of Statues. ",
    _other: "Required for each of the following quests: \"Ancient Relics in Modern Times\"."
  },
  {
    _unit: "Frost Relic",
    _desc: "An ancient relic that has a depiction of a 4 point snowflake in the front and Articuno in the back. This is commonly referred to as the 5th, and last, Relic.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Located in Mt. Gravyiew after defeating 5th gym, which you get taken to by King Pidgeot.",
    _other: "Required for each of the following quests: \"Ancient Relics in Modern Times\"."
  },
  {
    _unit: "Snorkel",
    _desc: "It contains a breathing apparatus that allows you to breathe underwater. It mysteriously won't work on Sea Fairy Island.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained after completing the Sand Temple, by defeating the Regi Golems. Given to you by Seris once you then leave.",
    _other: "~"
  },
  {
    _unit: "Demonstration Item",
    _desc: "Officer Diliget's training item that he normally uses to train Growlithe.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained after talking to the quest giver on Sea Fairy Island.",
    _other: "Required for each of the following quests: \"Wanted Poster: I.C. Aeromew\"."
  },
  {
    _unit: "Supicious Listen Device",
    _desc: "A Strange item that was dumped in the bushes",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained on Route 6 in the top right after speaking to Officer Wemorea outside the Eastboure Diner.",
    _other: "Required for each of the following quests: \"Wanted Poster: I.C. Aeromew\"."
  },
  {
    _unit: "Moltres Feather",
    _desc: "A fiery feather that is hot to the touch. It can thaw even the most frozen ice. Take this to the Sunrock Desert Oasis (C2). Required to obtain Zapdos.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained after defeating Moltres.",
    _other: "~"
  },
  {
    _unit: "Royal Berry",
    _desc: "It's actually an extremely high quality Passho berry, but don't tell anyone! Required to obtain Zapdos.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained after completing the puzzle in the Cloudland Heights (first time).",
    _other: "This item is required for each of the following quests: \"To meet the Queen\"."
  },
  {
    _unit: "Onderblade Mines Key",
    _desc: "A key that unlocks the exit of the Onderblade Mines.  Required to obtain Registeel.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained after completing the \"The Marvelous Fish\" quest in Strongwater Town.",
    _other: "This item is required for each of the following quests: \"To Open the Onderblade Mines\"."
  },
  {
    _unit: "Dried Ice Fruit",
    _desc: "Rare dried fruit in Orden that was imported from a distant land. Required to obtain Regice.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained in the Trail to Onderblade map after finding the hidden entrance in Onderblade Town.",
    _other: "~"
  },
  {
    _unit: "Reth Gifruf Library Card",
    _desc: "A library card belonging to Reth Gifruf. Required to obtain Regirock.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtained after speaking to Sage Seberic in Strongwater Town Regi Golem Shrine.",
    _other: "~"
  },
  {
    _unit: "Rebirth Crystal",
    _desc: "A crystal that resembles Ho-oh's tail feathers and has the power of rebirth. Can be used to 'rebirth' the following: Articuno, Zapdos, Moltres, Mewtwo, Mew, Regirock, Regice, Registeel.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "One can obtained from the \"King of the Sand\" quest.",
    _other: "Events, Deserted Island/Shore"
  },
  {
    _unit: "Event Orb",
    _desc: "A highly desirable item that is sometimes found when events are held. It disappears after an event is over.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available during the Magikarp Island 2015 event",
    _other: "~"
  },
  {
    _unit: "Fossil Pickaxe",
    _desc: "A Standard-issue pickaxe given to research volunteers",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Given by Professor Wollemi during the Dinosaur Island 2015 Event",
    _other: "~"
  },
  {
    _unit: "Jaggedy Fossil Rock",
    _desc: "A rock from the Fossil Event that needs to be taken to a researcher for identification. This item could be revived into either Amaura, Tyrunt or Bastiodon (yes, the evolution) when taken to Professor Wollemi's lab during the Dinosaur Island 2015 Event. The specific Pokemon depended on the week of the event.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "This item was obtainable during the Dinosaur Island 2015 Event.",
    _other: "~"
  },
  {
    _unit: "Generic Lab Pass",
    _desc: "It looks like a mass produced laboratory identification card. This item was required to unlock the secret door leading to a hidden beach during the Dinosaur Island 2015 Event.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Obtainable uring the the Dinosaur Island 2015 Event.",
    _other: "~"
  },
  {
    _unit: "Mystery Pouch",
    _desc: "Who knows what is inside this Halloween pouch? You could take these pouches to an NPC in the Halloween 2015 Event that opened them for chances of money, Eevee candies, Pumpkins or other goodies.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available during the Halloween 2015 Event.",
    _other: "~"
  },
  {
    _unit: "Mini Pumpkin Lantern",
    _desc: "A miniature jack-o-lantern that attracts certain Pokemon. Used to help obtain Pumpkaboo and Litwick during the Halloween 2015 Event.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available during the Halloween 2015 Event.",
    _other: "~"
  },
  {
    _unit: "Golden Candy",
    _desc: "A trick or treat candy that boosts the skills of a Pokemon. You were given exactly 5 of them and asked to distribute them to child NPCs in Driftwood Town during the Halloween 2015 Event.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available during the Halloween 2015 Event",
    _other: "~"
  },
  {
    _unit: "Trick Rock",
    _desc: "It does absolutely nothing. Looks like you got tricked. One of the possible items given when a Mystery Pouch was opened. It was used to help coax a Drifloon to join you but other than that it does nothing.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available during the Halloween 2015 Event.",
    _other: "~"
  },
  {
    _unit: "Eevee Candy",
    _desc: "A candy rumored to be able to increase EV points. It is illegal in 8 regions, but not in this one. Increases a specific stat's EVs by 5.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Was available during every event since the Halloween 2015 Event (Halloween 2015/Winter 2015/Valentines 2016/Easter 2016)",
    _other: "~"
  },
  {
    _unit: "Red Berry",
    _desc: "An interesting but inedible winter berry that wild Pokemon carry around. Used for quest purposes during the Winter 2015 Event",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available during the Winter 2015 Event.",
    _other: "~"
  },
  {
    _unit: "Snow Lantern",
    _desc: "A white Lantern that lights snow caves quite well. It could be given to an NPC in exchange for 10 Ultra Balls.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available during the Winter 2015 Event.",
    _other: "~"
  },
  {
    _unit: "Rock Smasher",
    _desc: "An odd rock-shaped object that turns boulders into gravel. Used to break a rock, which allowed you to enter a storyline cave.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available during the Winter 2015 Event.",
    _other: "~"
  },
  {
    _unit: "Heart Crystal",
    _desc: "A small transparent stone that is coveted by pink-colored Pokemon around Valentines day. Could be exchanged for Eevee Candies, as well as for Alomomola.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Used in the Valentines 2016 Event.",
    _other: "~"
  },
  {
    _unit: "Heart Necklace",
    _desc: "A sparkly necklace that is in heavy demand around Valentines Day. Used in the Valentines 2016 Event to progress the event storyline.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available in the Valentines 2016 Event.",
    _other: "~"
  },
  {
    _unit: "Mystery Object",
    _desc: "A mysterious coral-like object that is many different colors. It is a highly prized collectible. Used in the Valentines 2016 Event to progress the event storyline.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available in the Valentines 2016 Event.",
    _other: "~"
  },
  {
    _unit: "Stolen Card",
    _desc: "A Valentines card someone stole from the card seller. It was addressed to the card seller. Used in the Valentines 2016 Event to progress the event storyline.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available in the Valentines 2016 Event.",
    _other: "~"
  },
  {
    _unit: "Valentines Card",
    _desc: "A pretty card that is worth billions, and is popular around Valentines day. Used in the Valentines 2016 Event to progress the event storyline.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available in the Valentines 2016 Event.",
    _other: "~"
  },
  {
    _unit: "Plain Egg",
    _desc: "It's just a plain, ordinary egg. But, it's not a Pokemon egg so it's a mystery where it came from.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available in the Easter 2016 Event.",
    _other: "~"
  },
  {
    _unit: "Easter Egg",
    _desc: "A bright and decorative egg used in Easter festivities. Used in the Easter 2016 Event to progress the event storyline.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available in the Easter 2016 Event.",
    _other: "~"
  },
  {
    _unit: "Rare Candy",
    _desc: "A candy that is packed with energy. When consumed, it will instantly raise the level of a single Pokemon by one.  Can only be bought from the Player Store once per destination account.",
    _sell: "No the item is not sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "Can be purchased from the Player Store (10 for $5, one purchase per account)",
    _other: 'Url to come '
  },
  {
    _unit: "Important Carrot",
    _desc: "A very, very important carrot. Although no one knows why it is important. Used in the Easter 2016 Event to help tame Bunnelby hopping around the island",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Available in the Easter 2016 Event, Used to battle Bunnelby on Honeybun Farm.",
    _other: "~"
  },
  {
    _unit: "Geode",
    _desc: "Sometimes dropped form Geodude",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "use '!pokemon geodude' for locations",
    _other: "Need 3 to get Regirock, Registeel, Regice."
  },
  {
    _unit: "Salamencite",
    _desc: "One variety of the mysterious Mega Stones. Have Salamence hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "Token Shop, (2 tokens)",
    _other: 'Url to come'
  },
  {
    _unit: "Garchompite",
    _desc: "One variety of the mysterious Mega Stones. Have Garchomp hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "Token Shop, (3 tokens)",
    _other: 'Url to come'
  },
  {
    _unit: "Gengarite",
    _desc: "One variety of the mysterious Mega Stones. Have Gengar hold it, and this stone will enable it to Mega Evolve during battle",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "This will be found by the gengar lvl 50 From the old Lady, it is the haunter you get from Newpine Town, when talking to the old lady it evolves.",
    _other: "~"
  },
  {
    _unit: "Manectite",
    _desc: "One variety of the myserious Mega Stones. Have Manectric hold it, and this stone will enable it to Mega Evolve during battle",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "This Stone is the reward after you complete the quest \"The Menacing Manectric\"",
    _other: "~"
  },
  {
    _unit: "Venusaurite",
    _desc: "One variety of the mysterious Mega Stones. Have Venusaur hold it, and this stone will enable it to Mega Evolve during battle",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "100 Prize Tickets Sandmarsh Prize Room",
    _other: "~"
  },
  {
    _unit: "Charizardite X",
    _desc: "One variety of the mysterious Mega Stones. Have Charizard hold it, and this stone will enable it to Mega Evolve during battle",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "100 Prize Tickets Sandmarsh Prize Room",
    _other: "~"
  },
  {
    _unit: "Blastoisinite",
    _desc: "One variety of the mysterious Mega Stones. Have Blastoise hold it, and this stone will enable it to Mega Evolve during battle",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "100 Prize Tickets Sandmarsh Prize Room",
    _other: "~"
  },
  {
    _unit: "Sceptillite",
    _desc: "One variety of the mysterious Mega Stones. Have Sceptile hold it, and this stone will enable it to Mega Evolve during battle",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "100 Prize Tickets Sandmarsh Prize Room",
    _other: "~"
  },
  {
    _unit: "Swampertite",
    _desc: "One variety of the mysterious Mega Stones. Have Swampert hold it, and this stone will enable it to Mega Evolve during battle",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "100 Prize Tickets Sandmarsh Prize Room",
    _other: "~"
  },
  {
    _unit: "Blazikenite",
    _desc: "One variety of the mysterious Mega Stones. Have Blaziken hold it, and this stone will enable it to Mega Evolve during battle",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "100 Prize Tickets Sandmarsh Prize Room",
    _other: "~"
  },
  {
    _unit: "Aerodactylite",
    _desc: "One variety of the mysterious Mega Stones. Have Aerodactyl hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "Token Shop (2 tokens)",
    _other: 'Url to come'
  },
  {
    _unit: "Tyranitarite",
    _desc: "One variety of the mysterious Mega Stones. Have Tyranitar hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item not buyable",
    _loc: "Quest",
    _other: "~"
  },
  {
    _unit: "Gyaradosite",
    _desc: "One variety of the mysterious Mega Stones. Have Gyarados hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item not buyable",
    _loc: "Quest",
    _other: "~"
  },
  {
    _unit: "Houndoominite",
    _desc: "One variety of the mysterious Mega Stones. Have Houndoom hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item not buyable",
    _loc: "Quest",
    _other: "~"
  },
  {
    _unit: "Beedrillite",
    _desc: "One variety of the mysterious Mega Stones. Have Beedrill hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item not buyable",
    _loc: "Quest",
    _other: "~"
  },
  {
    _unit: "Alakazite",
    _desc: "One variety of the mysterious Mega Stones. Have Alakazam hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item not buyable",
    _loc: "Quest",
    _other: "~"
  },
  {
    _unit: "Pidgeotite",
    _desc: "One variety of the mysterious Mega Stones. Have Pidgeot hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item not buyable",
    _loc: "Quest",
    _other: "~"
  },
  {
    _unit: "Banettite",
    _desc: "One variety of the mysterious Mega Stones. Have Banette hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item not buyable",
    _loc: "Quest",
    _other: "~"
  },
  {
    _unit: "Ampharosite",
    _desc: "One variety of the mysterious Mega Stones. Have Ampharos hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item not buyable",
    _loc: "Quest",
    _other: "~"
  },
  {
    _unit: "Macho Brace",
    _desc: "An item to be held by a Pokemon. This stiff, heavy brace helps Pokemon grow strong but cuts Speed in battle.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "Token Shop (5 tokens)",
    _other: 'Url to come'
  },
  {
    _unit: "Soft Sand",
    _desc: "Increases the Power of Ground-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item it buyable",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Black Belt",
    _desc: "Increases the power of Fighting-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c,Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Black Glasses",
    _desc: "When held, Black Glasses raises the power of Dark-type moves by 20%",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Charcoal",
    _desc: "Increases the power of Fire-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Dragon Fang",
    _desc: "Increases the power of Dragon-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Hard Stone",
    _desc: "Increases the power of Rock-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Magnet",
    _desc: "Increases the power of Electric-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Mystic Water",
    _desc: "Increases the power of Water-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Never Ice Melt",
    _desc: "When held, Never-Melt Ice raises the power of Ice-type moves by 20%",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Poison Barb",
    _desc: "Increases the power of Poison-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Sharp Beak",
    _desc: "Increases the power of Flying-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Silk Scarf",
    _desc: "Increases the power of Normal-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Silver Powder",
    _desc: "When held, Silver Powder raises the power of Bug-type moves by 20%",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Spell Tag",
    _desc: "When held, Spell Tag raises the power of Ghost-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Twisted Spoon",
    _desc: "When held, Twisted Spoon raises the power of Phychic-type moves by 20%",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Miracle Seed",
    _desc: "When held, Miracle Seed raises the power of Grass-type moves",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "1000c, Bluegum/Darlinghurst/Newpine/Oldpine/Eastbourne/Sunrock Desert Traveling Merchant/Sandmarsh/Dorocoast/Blackfell/Wildhaven/Stongwater/Onderblade/Grayview PokeMarts",
    _other: "~"
  },
  {
    _unit: "Electirizer",
    _desc: "A box packed with a tremendous amount of energy. It is loved by certain Pokemon",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "20000c, Team Royal Black Market",
    _other: "~"
  },
  {
    _unit: "Ice Cones",
    _desc: "Its a cone that is formed around certain Ice type Pokemon. It tastes delicious",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2017",
    _other: "~"
  },
  {
    _unit: "Snow Bark",
    _desc: "A think and minty bark that falls off cetain Pokemon in the winter.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2017",
    _other: "~"
  },
  {
    _unit: "Wooden Toys",
    _desc: "A carved,wooden toy",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2017",
    _other: "~"
  },
  {
    _unit: "Empty Bottle",
    _desc: "An empty plastic bottle",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2017",
    _other: "~"
  },
  {
    _unit: "Fruit Cake",
    _desc: "A brown, brick-like cake that lasts for a very long time",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2017",
    _other: "~"
  },
  {
    _unit: "Wrapping Paper",
    _desc: "The perfect paper to wrap gifts!",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2017",
    _other: "~"
  },
  {
    _unit: "Gift Blue Print",
    _desc: "It's the carving patten for somesort of wooden toy",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2107",
    _other: "~"
  },
  {
    _unit: "Winter Gifts",
    _desc: "A special gift inspired by someone far away",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2017",
    _other: "~"
  },
  {
    _unit: "Altarianite",
    _desc: "One variety of the mysterious Mega Stones. Have Altaria hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the is not buyable",
    _loc: "Winter Event 2017/2018",
    _other: "~"
  },
  {
    _unit: "Audinite",
    _desc: "One variety of the mysterious Mega Stones. Have Audino hold it, and this stone will enable it to Mega Evolve during battle",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2017",
    _other: "~"
  },
  {
    _unit: "Pink Rose Petal",
    _desc: "A stiff petal carried with certain pink or rose-like Pokemon",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Drops from Skitty",
    _other: "Valentines Event 2018"
  },
  {
    _unit: "Pink Leaf",
    _desc: "A soft leaf that some Pokemon of Skitty Island like to carry around. It's great for blankets",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Drops from Cleffa, and Luvdisc",
    _other: "Valentines Event 2018"
  },
  {
    _unit: "Lopunnite",
    _desc: "One variety of the mysterious Mega Stones. Have Lopunny hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Easter Event 2017",
    _other: "~"
  },
  {
    _unit: "Sablenite",
    _desc: "One variety of the mysterious Mega Stones. Have Sableye hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not sellable",
    _loc: "Onderblade Town, Quest:Ninja and Samurai Ambassador",
    _other: "7000c(7K) and Sablenite"
  },
  {
    _unit: "Mawilite",
    _desc: "One variety of the mysterious Mega Stones. Have Mawile hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not sellable",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "Pinsirite",
    _desc: "One variety of the mysterious Mega Stones. Have Pinsir hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "Heracrossite",
    _desc: "One variety of the mysterious Mega Stones. Have Heracross hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: " No the item is not buyable in the pokemarts.",
    _loc: "Please Provide information",
    _other: "~"
  },
  {
    _unit: "Pun Encyclopedia",
    _desc: "A book that a publisher in Grayview creates. It contains the puns of Punmaster JK.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "BlueRidge Apt",
    _other: "Grayview, Collect one book every 24 hours"
  },
  {
    _unit: "Postal Bag",
    _desc: "An empty mail bag given to you by someone who quit their job.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "Purple Sticky Note",
    _desc: "It reads \"meet us at the PurpleRidge Apts. Rm1\"",
    _sell: "No the item is not sellable",
    _buy: "No the item not buyable",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "Closed Hotel Key",
    _desc: "The Key to the closed hotel in Grayview",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "Closed Hotel Room Key",
    _desc: "A sharp key that opens a specific room in the closed hotel",
    _sell: "No the item is not sellable",
    _buy: "No the itme is not buyable",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "Haunted Blade",
    _desc: "An old rusted blade that feels cursed when you hold it",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "Honey",
    _desc: "A sweet honey with a lush aroma that attracts wild pokemon when used in tall grass,caves, or on special trees",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Honeybun Farm",
    _other: "3 Combee and 1 Vesquin per hive (9 Combee and 3 Vesquin total), take off team and quest enable 1 set at a time, Collect every 24 hours"
  },
  {
    _unit: "Cornn Berry",
    _desc: "A berry used in cooking. This berrry is very rare and hard to obtain in the Unova region",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Honeybun Farm",
    _other: "Collect Berry every 24 hours"
  },
  {
    _unit: "Magost Berry",
    _desc: "A berry to be used in cooking. This berry is very rare and hard to obtain in the Unovea region",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Honeybun Farm",
    _other: "Collect Berry every 24 hours"
  },
  {
    _unit: "Honey Bun",
    _desc: "A strange but delicious bread that Pokemon love. It is smothered in honey",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "HoneyBun Home",
    _other: "Need 1 Honey and 1 Magost Berry"
  },
  {
    _unit: "Sunrise Badge",
    _desc: "A shining badge that depicts a stylized sunrise",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Sandmarsh City",
    _other: "~"
  },
  {
    _unit: "Mirage Crystal",
    _desc: "A rare crystal that is collect by Mirage Maniancs",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Pleas provide information",
    _other: "~"
  },
  {
    _unit: "Gilgandra Ticket",
    _desc: "A plane ticket for Gilgandra City",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "Sea Jewel",
    _desc: "A rare and beautiful gem that is dappled in moonlight",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Please provide information",
    _other: "Required to obtain Manaphy"
  },
  {
    _unit: "Gym Leader's Decree",
    _desc: "A declaration of a gym leader. Written on oil-based paper so it is water proof",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "High Quality Jar",
    _desc: "A high quality jar that is resistant to heat, frost, electrical, and impact damage. There is a use for it.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Please provide information",
    _other: "~"
  },
  {
    _unit: "Kings Rock",
    _desc: "An item to be held by a Pokemon. When the holder successfully inflicts damage, the target may also flinch.",
    _sell: "Yes the item is sellable",
    _buy: "Yes the item is buyable in pokemarts.",
    _loc: "25 Prize Tickets Sandmarch Prize Room",
    _other: "~"
  },
  {
    _unit: "Candy Cane",
    _desc: "A sweet and minty treat the wild Pokemon seem to hoard",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter Event 2018",
    _other: ""
  },
  {
    _unit: "Pink Berries",
    _desc: "A berry so hard that it is used more as an ornament than food. In distant places it is sometimes called an apricorn.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentine 2019",
    _other: "exchange for a Diner Coupon, Able to have 2 Max, Calms angry or grumpy Pokemon."
  },
  {
    _unit: "Pink Leaf",
    _desc: "A soft leaf that some Pokemon of Skitty Island like to carry around. It's great for blankets.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentine 2019",
    _other: "Dropped by various Pokemon"
  },
  {
    _unit: "Pink Petal",
    _desc: "A stiff petal carried with certain pink or rose-like Pokemon.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentine 2019",
    _other: "Collected from fishing(requires 2 Pink Leaf), Used to battle Blissey, and obtain certain pokemon"
  },
  {
    _unit: "Pink Leaf Trap",
    _desc: "A soft leafy arrangement that attracts certain bug Pokemon. It is popular around Valentines Day.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentine 2019",
    _other: "Requires 5 Pink Leaf's per trap."
  },
  {
    _unit: "Heart Crystal",
    _desc: "A small transparent stone that is coveted by pink-colored Pokemon around Valentines day.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentines 2019",
    _other: "Pokemon Drop"
  },
  {
    _unit: "Boring Rock",
    _desc: "An ordinary rock. Despite extensive investigation, nothing exciting has been discovered about it.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "August/September 2019 Mini Event",
    _other: "Pokemon Drop (Minccino and Darumaka),Exchange 5 Rocks for 1 Gem (Pawniard or Sandile)"
  },
  {
    _unit: "Pawniard Gem",
    _desc: "A gemstone used in a competition between rival treasure hunters. Its metallic aura is said to be because it was cut with the blades of a Pawniard.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "August/September Mini Event",
    _other: "Faint Minccino or Darumaka for Boring Rock, Can exchange 2 Gems for Rebirth Crystal"
  },
  {
    _unit: "Sandile Gem",
    _desc: "A gemstone used in a competition between rival treasure hunters. Its earthy aura is said to be because it has been buried by Sandile.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "August/September Mini Event",
    _other: "Faint MInncino or Darumaka for Boring Rock, Can exchange 2 Gems for Rebirth Crystal"
  },
  {
    _unit: "Nanab Berry",
    _desc: "A Berry to be used in cooking. This Berry is very rare and hard to obtain in the Unova region.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "November/December Mini Event (Rt 14 Secret Grotto)",
    _other: "Battle NPC on RT 14 Secret Grotto"
  },
  {
    _unit: "Postal Package",
    _desc: "A default flat-rate box that is express delivered by the Grayview Post Office",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Grayview Post Office - Managers Office",
    _other: "500c day delivery"
  },
  {
    _unit: "Stack of Wailmer",
    _desc: "6 Pokeballs with Wailmer inside. Catch one get 5 free",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Deserted Island-Shore",
    _other: " ",
  },
  {
    _unit: "Solar Drop",
    _desc: "A Shining crystal fragment coverted by Larvesta. It is said to have dropped for the sun itself.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Deserted Isand/Shore",
    _other: "Larvesta Drop (rare)"
  },
  {
    _unit: "Stone Gray Egg",
    _desc: "Either an egg as hard as a rock, or a rock shaped like an egg... [To be continued in the future storyline update]",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Deserted Island",
    _other: " "
  },
  {
    _unit: "Colourful Egg",
    _desc: "A colorful egg sometimes dropped from baby Pokemon",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Easter Event 2020",
    _other: "Certian item's can be exchanged for colourful eggs at the Eastbourne Pokemart (Eggs dropped by fainting Munchlax , Igglybuff , Bonsly and Togepi)"
  },
  {
    _unit: "EA Corp Egg",
    _desc: "Don't be fooled by the pretty wrapping. It's just an ordinary egg wrapped in cheap plastic that is colored like a crown! Many recommend to get rid of it by any means because of safety recalls.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Easter 2020",
    _other: " "
  },
  {
    _unit: "First Aid Pouch",
    _desc: "An item that a nurse planted to help instruct students in the Orden Trainer School.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Orden Trainer School Quest",
    _other: "Bluegum PokeCenter"
  },
  {
    _unit: "Cold Tea",
    _desc: "A cup of tea that someone forgot. It is now room temperature",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Second Floor Orden Trainer School Quest",
    _other: "Bluegum Tournament House"
  },
  {
    _unit: "Ability Capsule",
    _desc: "A capsule that allows a Pokemon with two Abilities to switch between these Abilities when it is used. This will not allow you to change the Ability to a Hidden Ability.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Halloween 2019",
    _other: ""
  },
  {
    _unit: "Rock Fern",
    _desc: "A small fern with leaf endings that look like rocks. It is a potent antidote plant",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Defeat the Entei behind the rock in Willowsteen Forest using an Ekans level 50 or above.",
    _other: "Item equired for the Quest 'A Forestry Stroll' to make an antidote for Kind Pidgeot."
  },
  {
    _unit: "Desert Yache Berry",
    _desc: "A desert-growing berry that resists ice damage. Dragon types love them.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts",
    _loc: "Winter 2020",
    _other: " "
  },
  {
    _unit: "Abomasite",
    _desc: "One variety of the mysterious Mega Stones. Have Abomasnow hold it, and this stone will enable it to Mega Evolve during battle.",
    _sell: "Yes the item is sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter 2020",
    _other: "Collect Lost Winter Gift"
  },
  {
    _unit: "Lost Winter Gift",
    _desc: "A present that a wild Pokemon stole from Santa's sleigh",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter 2020",
    _other: "Collected by fainting certain pokemon during event."
  },
  {
    _unit: "Egg of Summer",
    _desc: "A very light egg that seems to contain the essence of summer",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts. in the pokemarts.",
    _loc: "Winter 2020",
    _other: " "
  },
  {
    _unit: "Egg of Spring",
    _desc: "A very light egg that seems to contain the essence of spring",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter 2020",
    _other: " "
  },
  {
    _unit: "Egg of Autumn",
    _desc: "A very light egg that seems to contain the essence of autumn",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter 2020",
    _other: " "
  },
  {
    _unit: "Egg of Winter",
    _desc: "A very light egg that seems to contain the essence of winter",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Winter 2020",
    _other: " "
  },
  {
    _unit: "Crystal of Seasons",
    _desc: "A crystal as clear as glass that radiates a seasonal sheen",
    _sell: "No the item is not sellable",
    _buy: "Not the item is not buyable",
    _loc: "Winter 2020",
    _other: " "
  },
  {
    _unit: "Seasonal Fragment",
    _desc: "A crystal as clear as glass that radiates a seasonal sheen",
    _sell: "No the item is not sellable",
    _buy: "Not the item is not buyable",
    _loc: "Winter 2020",
    _other: " "
  },
  {
    _unit: "Heart Petal",
    _desc: "A soft petal infused with the Attract status effect. It is sought after by the Cupid Club.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentines 2021",
    _other: " "
  },
  {
    _unit: "Short Sticky",
    _desc: "Not to be confused with a medium or long stick, these Short Sticks have the perfect weight for throwing at things.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentines 2021",
    _other: " "
  },
  {
    _unit: "Pink Swirly Tuft",
    _desc: "A clump of soft hair from a Jigglypuff. It is used in Valentines themed crafts.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentines 2021",
    _other: " "
  },
  {
    _unit: "Attract Dart",
    _desc: "A soft-tipped dart that inflicts Attract status on Pokemon it is thrown at. It is issued by the Cupid Club for club activities only.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentines 2021",
    _other: " "
  },
  {
    _unit: "Chocolate Box",
    _desc: "A box crafted from hardwood that doesn't actually contain chocolate.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Valentines 2021",
    _other: "Varies prizes given when opened."
  },
  {
    _unit: "Past Event Ticket",
    _desc: "A ticket that allows you to access some previous events.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not buyable in the pokemarts.",
    _loc: "Usually giving during events",
    _other: "Valentines, Halloween, Winter, (Route 6, Darlinghurst Town, Bluegum Town) "
  },
  {
    _unit: "Painted Rock",
    _desc: "A rock that has been painted bright colours by a talented artist.",
    _sell: "No the item is not sellable",
    _buy: "No the item is not bayable in the pokemarts",
    _loc: "NPC in Onderblade Mines C3",
    _other: "Costs 30000 (30k) for 2 or 1 Hard Stone for 1"
  },
  {
        _unit:"Cold Tea ",
        _desc:"A cup ot tea that someone forgot. It is now room temperature. ",
        _sell:"No the item is not sellable ",
        _buy:"No the item is not buyable ",
        _loc:"Bluegum Tournament House ",
        _other:"Get quest from trainer school 2nd floor. "
    },

];
module.exports = items;
/*
{
        _unit:" ",
        _desc:" ",
        _sell:" ",
        _buy:" ",
        _loc:" ",
        _other:" "
    },
*/