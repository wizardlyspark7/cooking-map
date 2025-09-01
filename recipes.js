const recipes = {
    "usa": {
        blurb: "Were I a food purist, 90% of the recipes on this site would be tagged as 'American'",
        cookiePie: {
            type: "internal",
            course: "baked",
            id: "cookie-pie",
            name: "Cast Iron Cookie Pie",
            author: "zachIrain",
            altText: "Picture of a Cast Iron Cookie Pie.",
            url: "cookie-pie", /* Thumbnail can be accessed by using tn standard */
            time: [],
            preamble: "This is my recipe, adjusted from Lauren Allen's from tastesbetterfromscratch.com. This is one of Abby's favourites. I incorporated some of Kenji Alt Lopez steps to making a better cookie.",
            specialEquipment: ["Cast Iron Skillet"],
            ingredients: [
                ["12tbsp", "butter - melted"],
                ["1 cup", "light brown sugar"],
                ["1/2 cup", "white sugar"],
                ["1", "large egg"],
                ["1", "egg yolk"],
                ["1tbsp", "vanilla extract"],
                ["2 cups + 2tbsp", "all-purpose flour"],
                ["1/2tsp", "baking soda"],
                ["1/2tsp", "salt"],
                ["1 1/2 cups", "chocolate chips or other chopped chocolate"]
            ],
            instructions: [
                "Melt butter in the microwave, then allow to cool for a few minutes.",
                "Add melted butter, white sugar, and brown sugar to a bowl and beat with an electric mixer until well-blended.",
                "Add the egg, egg yolks, and vanilla; then, mix until well integrated.",
                "Mix in the flour, baking soda, and salt, until barely combined. Then stir in the chocolate chips, reserving a handful for topping the dough.",
                "Refrigerate the dough overnight - this will enhance the flavour",
                "When ready to cook, heat the oven to 325f/160c.",
                "Press the dough into a TBD inch cast iron skillet then sprinkle remaining chocolate chips on top",
                "Bake for 28-25 minutes until it looks just barely golden. The dough will continue to cook in the skillet once removed, and will firm considerably as it cools, so don't worry about undercooking it.",
                "Allow to cool for as long as you can, or 25 minutes, before slicing and serving."
            ],
            notes: [
                "The chocolate inside the cookie tends to melt into the dough, making a chocolatey mixture. You could probably prevent this with a chocolate with a higher melting point, or reserving some chocolate to place on top of the dough shortly before cooking.",
                "You could probably use anything you wanted to cook these, eg stainless steel or a springform tin. However, the steep sides of most cast irons plus their thermal mass are well suited to making a cookie pie.",
                "If you're unable to wait until the next day to bake the cookies, I recommend at least waiting an hour or two. This will allow the flour to autolyse, which will create a better tasting cookie. Kenji Alt Lopez has some very detailed writing on cookie science for further reading."
            ]      
        },
        utahScones: {
            type: "external",
            course: "baked",
            id: "utah-scones",
            name: "Utah Scones",
            url: "utah-scones",     
            websiteLink: "https://www.chelseasmessyapron.com/utah-scones/#wprm-recipe-container-115251"
        },
        eggsBenedict: {
            type: "internal",
            course: "main",
            id: "eggs-benedict",
            name: "Eggs Benedict",
            author: "zachIrain",
            altText: "Picture of Eggs Benedict",
            url: "eggs-benedict", /* Thumbnail can be accessed by using tn standard */
            time: [],
            servingSize: "Two people (Makes 4x eggs benedicts)",
            preamble: "A really delicious but simple meal. The two most important things are making a hollandaise you love, and poaching the eggs well, in that order.",
            specialEquipment: ["Tool for poaching eggs"],
            ingredients: [
                ["Hollandaise Sauce"],
                ["2", "egg yolks"],
                ["1/4 cup", "cream"],
                ["1/2tsp", "mustard powder"],
                ["1tbsp", "lemon juice"],
                ["4tbsp", "butter"],
                ["Eggs Benedict"],
                ["4", "eggs"],
                ["2", "english muffins, halved"],
                ["6", "rashers of bacon, or desired substitute"],
                ["1tbsp", "dried or fresh parsley, for a pretty garnish."],               
            ],
            instructions: [
                "Note: This dish is hard to time correctly. See note for more info.",
                "Heat a medium saucepan of water until bubbles form on the bottom. Use the time while you make the Hollandaise to find the right setting to maintain this temperature.",
                "Melt butter in a small saucepan at a low heat.",
                "Mix in the two egg yolks and remaining ingredients. Take great care to add as little heat as possible, as any simmering will destroy the emulsion",
                "Once all ingredients are integrated, taste the sauce to make sure you're satisfied with it. If you are, remove it from the heat. Periodically add it back to a low temperature element to keep it warm, and make sure it's warm before topping the eggs benedict.",
                "Fry the bacon in the pan. Once the bacon is about 6 minutes from your desired level of doneness, crack the 4 eggs into the water. I can't offer any tips for poaching eggs because I just use a tool - I respect anyone who chooses to do it the hard way!",
                "When there's about 4 minutes until the bacon's completion, begin toasting the 4 english muffins.",
                "Once everything is completed (Hopefully on time), plate everything up. English muffin, then bacon, then one egg per muffin and spoon hollandaise on top. Garnish with parsley if desired.",
            ],
            notes: [
                "The hard part of this recipe is the timing. The bacon and egg are both best served immediately, and the hollandaise is so small in volume that even a small burner on low heat can break the sauce. There are some methods to alleviate this - oven cooked bacon can be timed accurately with experience, and you can finish the holldaise first and quickly reheat when the other ingredients are ready. Ultimately, I think this recipe is hard to get perfect on the first try.",
                "You can substitute bacon for ham, salmon, whatever you're into.",
            ]      
        },
        garlicBread: {
            type: "internal",
            course: "entree",
            id: "garlic-bread",
            name: "Garlic Bread",
            author: "zachIrain",
            altText: "Image of garlic bread.",
            url: "garlic-bread", /* Thumbnail can be accessed by using tn standard */ 
            time: [],
            preamble: "This is my attempt to recreate the glory of the garlic bread from Dominos in New Zealand. I don't think I've succeeded yet, but it's still better than what I've found in Utah. I'll never understand why American Pizza more often sells bread sticks.",
            specialEquipment: ["Tin foil"],
            ingredients: [ /* Format: [Imperial, Metric, text]. Dont capitalise the text unless justified. */
                ["1", "loaf of french bread."],
                ["8tbsp", "butter"],
                ["1tbsp", "olive oil"],
                ["5", "cloves of garlic"],
                ["a large pinch", "of parmesan cheese"],
                ["1/2tsp", "salt"],
                ["1/2tsp", "parsley"],
                ["1/2tsp", "oregano"],
                ["1/2tsp", "garlic powder"],
                ["1/2tsp", "paprika"],
            ],
            instructions: [
                "Preheat the oven to 350f/180c",
                "Slice the bread into slices, approximately 1inch (2.5cm) wide. Make sure not to cut to the bottom of the bread, you want the loaf to be connected at the bottom.",
                "Microwave the butter in a microwave safe container for approximately 13 seconds. You want the butter to be soft enough to stir and mix, but not liquidy. It helps if you cut the butter into several pieces before microwaving.",
                "Add the remaining ingredients, and stir.",
                "Use a silicone brush or a spoon to apply the mixture to the inner surfaces of the bread. Make sure the mixture is well mixed beforehand, as the garlic strongly tends to settle at the bottom.",
                "Once every slice of bread has the mixture spread, wrap the bread in tinfoil. I typically do this by setting the bread on a roll of tinfoil and wrapping around, then twisting the ends.",
                "Place in the oven for about 12-13 minutes. "
            ],
            notes: [
                "I've never tried this, but I suspect that if you heated the garlic and olive oil in a saucepan you would cook out some of the harsh notes of the garlic.",
                "In my experience, garlic and garlic powder are both valuable additions to garlic bread, so I recommend both if possible.",
            ]      
        },
        alfredo: {
            type: "internal",
            course: "main",
            id: "alfredo",
            name: "Alfredo (American style)",
            author: "zachIrain",
            altText: "Picture of Alfredo",
            url: "alfredo" /* Thumbnail can be accessed by using tn standard */, 
            time: [],
            preamble: "This is a ridiculously indulgent dish. While it doesn't have the sharply cheesey taste of the original Alfredo, it's nonetheless a delightful 'comfort' meal, and one of the first I dishes I learned in America.",
            specialEquipment: [],
            ingredients: [ /* Format: [Imperial, Metric, text]. Dont capitalise the text unless justified. */
                ["1lb", "453g", "fettuccine pasta"],
                ["6tbsp", "butter"],
                ["5", "cloves garlic - crushed"],
                ["2tbsp", "flour"],
                ["1 1/2 cups", "milk"],
                ["1 1/2 cups", "cream"],
                ["3 cups", "cheddar cheese or other as preferred"],
                ["Several grinds", "Pepper"],
                ["1tbsp", "salt"],
                ["1tsp", "garlic powder"],
                ["1tsp", "onion powder"],
                ["1tsp", "paprika powder"],
                ["1btsp", "cheese powder (optional)"],
                ["1tsp", "parsley (optional, garnish)"],
            ],
            instructions: [
                "Melt the butter in a frying pan over low/medium heat. At this point you could bring a salted pot of water large enough for the noodles to a near-boil.",
                "Once melted, increase temperature to a medium heat. Once the butter is bubbling, add the crushed garlic and sautee for about 1 minute",
                "Turn the temperature back down to low/medium and add the flour. Stir until combined then let cook for a further minute",
                "Turn the temperature all the day down to low, then begin integrating the cream. Cheese powder is quite resistance to mixing, so if you intend to use it then add it now. It's much easier to integrate liquids into mixtures at lower concetrations, so take your time and integrate small amounts at a time. At about this point you could bring the pasta water to a boil and add the pasta, then cook per the instructions.",
                "Once the cream is fully integrated, repeat the process with the milk.",
                "Once the milk is integrated, you can begin increasing the heat, while stirring frequently. You can begin increasing the temperature in the prior steps, but this is the less-risky method",
                "Shortly, the mixture will thicken then begin to bubble. At this point, take the sauce off the heat. Now you can stir in all of your seasonings and begin stirring cheese into the sauce, a handful at a time. You may need to heat the frying pan up again to get the cheese to melt, but absolutely avoid letting it bubble as this will quickly break the emulsion.",
                "Once all the seasonings are integrated and the cheese has melted through, mix in your pasta. Garnish with parsley if desired and serve."
            ],
            notes: [
                "Cheesy/buttery sauces struggle with being reheated. Expect the sauce to split if reheated in the microwave and butter to pool at the bottom of the bowl. Additionally, this dish cools into a quite solid brick of sauce and noodle. Overall, I don't recommend the leftovers of this dish nearly as much as when fresh.",
                "I typically will serve this with chicken, but almost anything will work with this.",
                "The seasonings mentioned are honestly guesses. I don't measure and I taste often."
            ]      
        },
    },
    nzl: {
        stickyLickenChicken: {
            type: "internal",
            course: "main",
            id: "sticky-licken-chicken",
            name: "Sticky Licken' Chicken",
            author: "glenIrain",
            altText: "Image of Sticky Licken Chicken",
            url: "sticky-licken-chicken" /* Thumbnail can be accessed by using tn standard */, 
            time: [],
            preamble: "One of my favourite of dad's recipes that I've never managed to capture. This is my best understanding of his recipe, that I hope to update some day to yield better results.",
            specialEquipment: [],
            ingredients: [ /* Format: [Imperial, Metric, text]. Dont capitalise the text unless justified. */
                ["6", "Boneless skinless chicken thighs"],
                ["3tbsp","Fivespice"],
                ["12oz", "Sweet Chili Sauce"],
                ["A pinch", "of salt"],
                ["1tbsp", "Sesame seeds"]
                
            ],
            instructions: [
                "Preheat oven to 210c (410f). Prepare chicken by salting it and coating in plenty of fivespice. It's difficult to estimate how much - less than if you rolled it in Fivespice, but still quite a lot.",
                "Once the oven is at temperature, place the chicken on a removable wire rack. This should be on top of an oven tray, to avoid making a mess. Drizzle tops of chicken thights generously with sweet chili sauce, then place in the oven.",
                "Every 10 minutes, remove the tray from the oven and scoop up any sweet chili sauce that has fallen off, and add more chili sauce until the thighs are covered again.",
                "You'll repeat this step 3-4 times, until the thighs are cooked and the sweet chili sauce has reduced on top of the thighs. Consider using the broiler to speed up this effect if it takes too long.",
                "Once the chicken thighs are coated in a dark and sticky sauce, remove and slice into strips. To serve, sprinkle generously with sesame seeds."
            ],
            notes: [
                "If you're willing to waste another dish, consider toasting the sesame seeds.",
                "This reecipe doesn't brown as much as I'd like. Perhaps it should use the broiler the entire time? I don't know.",
                "My dad would typically serve this on a bed of risotto, so that is how I recommend serving this dish."
            ]      
        },
        raspberryIcedBuns: {
            type: "internal",
            course: "baked",
            id: "iced-buns",
            name: "Raspberry Iced Buns",
            author: "zachIrain",
            altText: "An image of raspberry iced buns",
            url: "" /* Thumbnail can be accessed by using tn standard */, 
            time: [],
            preamble: "This is loosely adapted from Erin Clarkson's recipe from cloudykitchen.com. Mostly, I made my own frosting with actual raspberries that I think adds a burst of flavour and acid. The most interesting part of this recipe is the Tangzhong, it's something I would love to understand and adapt into more recipes. These are incredible buns though - for the first day or two they're as soft as fresh doughnuts, and that is all due to the base recipe.",
            specialEquipment: [],
            ingredients: [ /* Format: [Imperial, Metric, text]. Dont capitalise the text unless justified. */
                ["Tangzhong"],
                ["0.9oz", "25g", "Bread flour"],
                ["4.25oz", "120g", "Whole milk"],
                ["Buns"],
                ["7oz", "200g", "Cold milk"],
                ["0.7oz", "20g", "Granulated sugar"],
                ["2tsp", "7g", "Instant yeast"],
                ["1 1/2tsp", "Salt"],
                ["2", "Eggs, ideally at room temperature"],
                ["12.7oz", "360g", "Bread flour"],
                ["3tbsp", "Butter, at room temperature"],
                ["Some", "water"],
                ["Icing"],
                ["9.2oz", "260g", "Powdered sugar"],
                ["1 1/3tbsp", "2tbsp", "Butter, at room temperature"],
                ["1/4tsp", "Vanilla extract"],
                ["0.7oz", "20mk", "Boiling water"],
                ["1 cup", "Fresh raspberries"],
                ["2tbsp", "Granulated sugar"],
                ["1tbsp", "Lemon juice"],
                ["A pinch", "of salt"],


            ],
            instructions: [
                "",
                "",
                "",
            ],
            notes: [
                "I would like to come back to this and convert the oz measurements into cups where applicable. Unfortunately grams are a weight measurement, and cups are a volume measurement, so I cannot do the conversion easily.",
                "The original recipe makes some specifications - room temperature eggs, the addition of milk powder, that I have broadly ignored and still found these delicious. I don't doubt they are good changes though.",
                "I never use unsalted butter. I don't think the difference is typically noticeable, in any case."
            ]      
        },
        dadsMince: {
            type: "internal",
            course: "main",
            id: "dads-mince",
            name: "Dad's Mince",
            author: "glenIrain",
            altText: "A picture of Dad's mince",
            url: "dads-mince" /* Thumbnail can be accessed by using tn standard */, 
            time: [],
            preamble: "I think the way I make this has drifted somewhat from dad's original recipe, but this is my go-to for mince for just about every recipe. It's a good balance of sweet, salty, and umami, and works for just about every dish.",
            specialEquipment: [],
            ingredients: [ /* Format: [Imperial, Metric, text]. Dont capitalise the text unless justified. */
                ["1lb", "mince - see notes"],
                ["1/4 cup", "BBQ sauce"],
                ["1/4 cup", "Sweet Chili Sauce"],
                ["2 tbsp", "Sriracha"],
                ["2 tbsp", "Worcestershire Sauce"],
                ["Several grinds", "Salt"],
                ["Several grinds", "Pepper}"],
                ["2tsp", "Garlic Powder"],
                ["2tsp", "Onion Powder"],
                
            ],
            instructions: [
                "Pre-heat a non-stick frying pan to a medium-high heat, then add the mince. If using a leaner mince, consider adding a teaspoon or two of cooking oil.",
                "As the mince cooks, begin breaking up the mince using a spatula or wooden spoon. Make sure you stir to cook the meat evenly. Continue until the meat is as broken up as you want it to be.",
                "Eventually the mince will release fat and water that will boil in the frying pan. Shortly the water will have boiled off, and you'll notice it sounds as though the meat is frying, rather than boiling.",
                "At this stage, you may wish to drain off excess fat if you have a relatively fatty grade of mince. The mince will continue to fry in the fat you are unable to strain off.",
                "After optionally draining fat, turn the heat down to medium-low and begin adding the sauce and seasonings. Order is unimportant, just try to make sure that everything gets relatively evenly seasoned by stirring after adding each ingredient. I recommend easing the temperature towards low during this so as not to overcook the mince.",
                "Once you have integrated all the ingredients, I suggest tasting and adjusting seasoning to preference. Once satisfied, the mince is complete.",
            ],
            notes: [
                "I typically buy 80% lean because it's cheaper. This does require straining residual fat, but you could probably skip this by using 93% lean.",
                "The most important thing to understand about this recipe is that most of the liquid that comes out will be water. You must boil it off to begin cooking the mince in the fat, which promotes browning and a stronger flavour.",
            ]      
        },

    },
    aus: {
        lemonLimeandBitters: {
            type: "internal",
            course: "other",
            id: "lemon-lime-and-bitters",
            name: "Lemon Lime and Bitters",
            author: "zachIrain",
            altText: "A picture of Lemon Lime and Bitters",
            url: "lemon-lime-and-bitters" /* Thumbnail can be accessed by using tn standard */, 
            time: [],
            preamble: "I'm told by the internet that this is an Australian drink so, begrudgingly, it lives in the Australia section. When I lived in New Zealand, Lemon Lime and Bitters was my go-to restaurant drink. While America has yet to realise just how delicious the drink is, Walmart did begin stocking Angostura bitters at my local Walmart. With an affordable means of getting bitters, I decided to write down a recipe here that is perfectly to my taste.",
            specialEquipment: [],
            ingredients: [ /* Format: [Imperial, Metric, text]. Dont capitalise the text unless justified. */
                ["7fl oz","200ml","Sprite - sugarfree is acceptable."],
                ["1tbsp", "lime cordial or fresh lime juice"],
                ["1tsp","Angostura bitters"],
                ["Some", "ice cubes"],
                ["1 slice", "lime or lemon, for decoration"]
            ],
            instructions: [
                "Mix all ingredients together. Place lemon or lime wedge on rim of glass, with a cut, or drop it into the drink to infuse further flavour.",
            ],
            notes: [
                "Recipes for drinks are very underwhelming.",
                "I love a bitters-forward flavour, as otherwise this can just taste like a funkier sprite. For a milder taste, use 1/2tsp of bitters instead.",
                "The Angostura bitters I have, which I understand is only made by one company and therefore will be the same globally, is approximately 45% alcohol by volume. Therefore this drink contains about 2ml of alcohol, making it about 0.9% alcohol. A standard drink in the USA is 18ml, so you would need to drink about 40 of these to get meaningfully intoxicated."
            ]      
        },

    },
    ind: {
        blurb: "Indian food is criminally underrepresented in America. The downside to this is I don't get cheap, tasty Indian takeaways. The upside is I get the privilege of making it for other people and giving them a new, hopefully enjoyable, experience.",
        Naan: {
            type: "external",
            course: "entree",
            id: "naan",
            name: "Naan bread",
            url: "naan",     
            websiteLink: "https://www.recipetineats.com/naan-recipe/#wprm-recipe-container-58510"
        },
        butterChicken: {
            type: "internal",
            course: "main",
            id: "butter-chicken",
            name: "Butter Chicken",
            author: "zachIrain",
            altText: "Picture of Butter Chicken.",
            url: "butter-chicken" /* Thumbnail can be accessed by using tn standard */, 
            time: [],
            preamble: "Truly the iconic dish. Maybe some day I'll get mine to restaurant standards, but for now this will have to do.",
            specialEquipment: [],
            ingredients: [ /* Format: [Imperial, Metric, text]. Dont capitalise the text unless justified. */
                [],
                [],
                [],
                
            ],
            instructions: [
                "",
                "",
                "",
            ],
            notes: [
                "",
                "",
                ""
            ]      
        },

    },
    ita: {

    },
    tha: {

    },
    jpn: {

    },
    kor: {
        BraisedPotatoes: {
            type: "internal",
            course: "entree",
            id: "braised-potatoes",
            name: "Braised Potatoes",
            author: "zachIrain",
            altText: "An image of Korean braised potatoes.",
            url: "braised-potatoes" /* Thumbnail can be accessed by using tn standard */, 
            time: [],
            preamble: "This is adapted from a recipe by Sunny Lee on seriouseats.com. I've tweaked this recipe over time, mostly to try and bring it closer to Abby's recollection of how this dish tasted at her favourite restaurant, Sam Hawk, which sadly closed during Covid. I altered this recipe in a few ways. First, I dramatically increased the recipe size - I love cooking, but I want to minimise how often I'm washing dishes. Second, I tweaked the balance of soy sauce, water, and sugar until I found a mix that perfectly suited my palatte. I replaced some of the soy sauce with low-sodium soy sauce, to preserve the umami flavour without an overload on salt. Lastly, I add honey when I remember to because that brings the sweetness up to what Abby is familiar with.",
            specialEquipment: ["High-rimmed frying pan with lid. Large pot acceptable substitute."],
            ingredients: [ /* Format: [Imperial, Metric, text]. Dont capitalise the text unless justified. */
                ["7tbsp", "soy sauce"],
                ["2tbsp", "low-sodium soy sauce"],
                ["9tbsp", "135ml", "water"],
                ["6tbsp", "brown sugar"],
                ["a dash of", "fish sauce"],
                ["1tbsp", "honey (Optional)"],
                ["3", "cloves garlic - crushed"],
                ["2lb", "900g", "potatoes - weigh once prepared."],
                ["3tbsp", "sesame oil"],
                ["1tbsp", "sesame seeds"],
                ["2tbsp", "cooking oil, eg vegetable"]
                
            ],
            instructions: [
                "Mix the soy sauces, water, brown sugar, honey and fish sauce into a measuring cup and stir - this is your braising liquid. To save time, you can do this while the potatoes fry in the oil.",
                "Clean the potatoes, then optionally peel. See notes for information and recommendations on what potaotoes and whether to peel.",
                "Chop your optionally peeled potatoes into same sized cubes. Target cubes of approximately 1in/2.5cm per side, but typically it's easier to cut potatoes into thirds, then half or quarter those pieces.",
                "Heat the cooking oil in a frying pan with high walls on a medium-high heat - enough to stop your braising liquid from spilling over.",
                "Once you can feel the heat radiating from the pan with a hand held over it, carefully add your potatoes to avoid splashing oil.",
                "If your potatoes don't fit in one layer on the frying pan, you will need a bigger pan or to remove some potatoes. It's okay to remove some - this recipe makes quite a lot.",
                "Cook the potatoes in the oil for about 12-12 minutes. Don't stir for the first 4 minutes, then check the potatoes. If they are browning on the bottom them flip them over. Try to get as many sides of as many potato chunks browned as possible - but you won't get them all.",
                "The goal isn't to cook through the potatoes at this stage, just to brown the surfaces to enhance flavour. Once they are suitably browned (Remember: You won't get them all), turn heat to low and attempt to drain any remaining oil.",
                "Move all the potatoes to one side and add the crushed garlic to the other side. If there isn't enough oil for it to cook in, add a small amount. Stir the garlic.",
                "Once garlic is fragrant, add the braising liquid. Stir to make sure potatoes are relatively evenly sitting in the braising liquid, then cover the frying pan.",
                "Maintain the dish at a simmer for 10 minutes - adjust heat as necessary. The covered pan will make sure the potatoes cook evenly, and the braise does not lose much volume.",
                "After 10 minutes, insert a knife into a potato piece to test doneness. If it feels cooked through, remove the lid and turn the heat to medium-high.",
                "Keep stirring during this step, as the braising liquid will rapidly reduce. Be careful with how you stir as the potatoes are quite fragile at this stage.",
                "Reduce the mixture until you are satisfied with the reduction. You can reduce until no liquid is attached to the bottom of the pan (And is instead all covering potatoes), and I prefer to do this for additional flavour, but you may leave some liquid left as a thick sauce. Be careful not to overdo it as a medium high heat will very quickly split the liquid if it reduces too much.",
                "Once you have reduced the liquid to your liking, remove from heat immediately. Pour the sesame oil on top of the potatoes and stir. Sprinkle sesame seeds on top.",
                "Traditionally this dish is eaten cold, but I prefer it hot. I often serve this with chicken bulgogi and rice - but I think it would be a suitable accompaniment for many korean or east-asian dishes."
            ],
            notes: [
                "The ideal and best tasting form of this dish uses peeled potatoes, since sides with the skin on will not brown. However, potatoes' nutrients are overwhelmingly in the skin, so you may judge keeping the skins to be worth the trade offs (Plus, it's much easier). For this reason I recommend making sure you have 900g of peeled or unpeeled potatoes, as 900g of pre-peeled potatoes will, once peeled, cook down with more braising liquid than is necessary",
                "In terms of the type of potato, waxy potatoes are best if not peeling, as their skins tend to be thinner and less noticeable. Brown potatoes fry better so are preferably if peeling. Ultimately - 9 times out of 10 I do what's cheap.",
                "I haven't tried this - but you could probably add the potatoes to cold oil and prevent any splash risk.",
                "If you are adverse to using oil, you could boil the potatoes for ~7-10 minutes instead. The sauce carries most of the flavour, so I think they would still taste okay.",
                "Toasted sesame seeds are of course tastier than non-toasted, but it's an additional step that I will typically skip.",
                "Honey will make this dish sweeter, which is more familiar to Abby's Sam Hawk memory - hence why it's optional as I don't necessarily prefer it.",
                "If you don't have low-sodium soy sauce, I recommend substituting the 2tbsp low-sodium with 1tbsp regular soy sauce. Any more and I find the dish has a very salt aftertaste, which is not worth it for the additional umaminess."
            ]      
        },

    },
    gbr: {

    },
    fra: {
        
    },
    hun: {
        paprikaChicken: {
            type: "internal",
            course: "main",
            id: "paprika-chicken",
            name: "Paprika Chicken",
            author: "zachIrain",
            altText: "A picture of Paprika Chicken",
            url: "paprika-chicken" /* Thumbnail can be accessed by using tn standard */, 
            time: [],
            preamble: "Pan-fried chicken pieces in a moreish smokey paprika sauce. Best served with oven-roasted potatoes to suck up the extra sauce as this recipe makes plenty of sauce.",
            specialEquipment: [],
            ingredients: [ /* Format: [Imperial, Metric, text]. Dont capitalise the text unless justified. */
                ["2", "chicken breasts"],
                ["1 cup", "heavy cream"],
                ["3/4 cup", "chicken stock"],
                ["2", "cloves garlic - crushed"],
                ["2tbsp", "smokey paprika"],
                ["A pinch", "of cayenne pepper"],
                ["Some", "salt - to taste"],
                ["Some", "pepper - to taste"],
                ["Some", "seasoning for the chicken - your choice"],
                ["A few tablespoons", "cooking oil - for frying."]

                
            ],
            instructions: [
                "Slice the chicken breasts into flat pieces. This is best done by slicing the chicken perpendicular to your countertop. Each breast can be sliced once or using this method. Aim for even thicknesses.",
                "Season the chicken with seasonings of your choosing - just make sure some salt is included.",
                "Fill a shallow bowl or large plate with flour, then season the flour until it looks good to you. Salt, pepper, garlic powder, and onion powder are good choices here.",
                "Heat the cooking oil in a frying pan over a medium-high heat until hot. Then pan fry the chicken, flipping when the heat-down side is cooked, until both sides are well-seared.",
                "Remove the chicken from the heat, then reduce the heat to medium-low. Add the crushed garlic and stir until fragrant, about 1 minute. You'll notice the flour from the chicken will form a roux, which will help thicken the sauce.",
                "Add the chicken stock and stir until incorporated. Stirring occasionally, increase the heat until simmering.",
                "Add the cream. Stir until incorporated.",
                "At the smokey paprika, cayenne pepper, several grinds of salt and pepper, and any other seasonings you would like. A pinch of MSG will enhance the umami-nes of this dish. Stir until everything is combined.",
                "Re-add the chicken then continue simmering until the chicken is cooked through. Be careful to avoid simmering too aggressively, as this may break the sauce. "
            ],
            notes: [
                "The reason I don't specify seasoning for the chicken here is that I don't think it matters much. Seasoning chicken in a dish that will be coated and pan fried gives the impression of flavour, without necessarily contributing flavour on its own. Salt and pepper is surely sufficient - but I will typically grab a seasoning mix I like and use that.",
                "This recipe is perfect for oven-roasted potatoes. You'll find my recipe here:",
                "I use a stock concentrate, but with a higher ratio of stock to water than recommended. More flavour is more better.",
                "For an even more succulent dish, substitute the cooking oil with butter."
            ]      
        },
    }
};

export default recipes;