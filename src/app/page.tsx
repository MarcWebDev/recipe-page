import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-fit flex items-center justify-center">
        <div className="w-full bg-white h-fit min-[700px]:w-[calc(100%-180px)] min-[700px]:my-1600 min-[700px]:rounded-[24px] lg:w-[736px]">
            <Image src="/image-omelette.jpeg" alt="Image of an omlette" width={375} height={171} className="w-full min-[700px]:m-500 min-[700px]:w-[calc(100%-80px)] min-[700px]:rounded-[12px]"/>
            <h1 className="text-preset-1 text-[36px] min-[700px]:text-[40px] mt-500 mx-400">Simple Omelette Recipe</h1>
            <p className="text-preset-4 mx-400 mt-300">An easy and quick dish, perfect for any meal. This classic
                omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese,
                vegetables, or meats.</p>

            <div className="w-[calc(100%-64px)] mx-400 bg-rose-50 p-300 mt-400 rounded-[12px]">
                <h2 className="text-preset-3 text-rose-800">Preparation time</h2>
                <ul className="list-disc mx-300 mt-200">
                    <li className="text-preset-4 text-rose-800"><span
                        className="text-preset-4-bold text-stone-600">Total:</span> <span
                        className="text-stone-600">Approximately 10 minutes</span></li>
                    <li className="text-preset-4 text-rose-800 mt-100"><span
                        className="text-preset-4-bold text-stone-600">Preparation:</span> <span
                        className="text-stone-600">5 minutes</span></li>
                    <li className="text-preset-4 text-rose-800 mt-100"><span
                        className="text-preset-4-bold text-stone-600">Cooking:</span> <span
                        className="text-stone-600">5 minutes</span></li>
                </ul>
            </div>

            <h2 className="text-preset-2 text-brown-800 mx-400 mt-400">Ingredients</h2>
            <ul className="list-disc mx-[55px] mt-300">
                <li className="text-preset-4 text-brown-800"><span className="text-stone-600">2-3 large eggs</span></li>
                <li className="text-preset-4 text-brown-800 mt-100"><span
                    className="text-stone-900">Salt, to taste</span></li>
                <li className="text-preset-4 text-brown-800 mt-100"><span
                    className="text-stone-900">Pepper, to taste</span></li>
                <li className="text-preset-4 text-brown-800 mt-100"><span
                    className="text-stone-900">1 tablespoon of butter or oil</span></li>
                <li className="text-preset-4 text-brown-800 mt-100"><span
                    className="text-stone-900">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span>
                </li>
            </ul>

            <div className="h-[1px] w-[calc(100%-64px)] bg-stone-150 my-400 mx-400"></div>

            <h2 className="text-preset-2 text-brown-800 mx-400">Instructions</h2>
            <ul className="mx-[40px] mt-300">
                <li className="text-preset-4"><span className="text-preset-4-bold text-brown-800">1. </span><span
                    className="text-preset-4-bold text-stone-600">Beat the eggs: </span><span
                    className="text-stone-600">In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span>
                </li>
                <li className="text-preset-4 mt-100"><span className="text-preset-4-bold text-brown-800">2. </span><span
                    className="text-preset-4-bold text-stone-600">Heat the pan: </span><span
                    className="text-stone-600">Place a non-stick frying pan over medium heat and add butter or oil.</span>
                </li>
                <li className="text-preset-4 mt-100"><span className="text-preset-4-bold text-brown-800">3. </span><span
                    className="text-preset-4-bold text-stone-600">Cook the omelette: </span><span
                    className="text-stone-600">Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span>
                </li>
                <li className="text-preset-4 mt-100"><span className="text-preset-4-bold text-brown-800">4. </span><span
                    className="text-preset-4-bold text-stone-600">Add fillings (optional): </span><span
                    className="text-stone-600">When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span>
                </li>
                <li className="text-preset-4 mt-100"><span className="text-preset-4-bold text-brown-800">5. </span><span
                    className="text-preset-4-bold text-stone-600">Fold and serve: </span><span
                    className="text-stone-600">As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span>
                </li>
                <li className="text-preset-4 mt-100"><span className="text-preset-4-bold text-brown-800">3. </span><span
                    className="text-preset-4-bold text-stone-600">Enjoy: </span><span
                    className="text-stone-600">Serve hot, with additional salt and pepper if needed.</span>
                </li>
            </ul>

            <div className="h-[1px] w-[calc(100%-64px)] bg-stone-150 my-400 mx-400"></div>

            <h2 className="text-preset-2 text-brown-800 mx-400 mt-400">Nutrition</h2>
            <p className="text-preset-4 mx-400 my-300">The table below shows nutritional values per serving without the additional fillings.</p>

            <div>
                <div className="flex items-center w-[100%-64px] mx-400 mb-150">
                    <span className="w-[calc(100%-64px/2)] text-preset-4 ml-400 text-stone-600">Calories</span>
                    <div className="h-1 w-200"></div>
                    <span
                        className="w-[calc(100%-64px/2)] text-preset-4-bold ml-200 mr-400 text-brown-800">277kcal</span>
                </div>
                <div className="h-[1px] w-[calc(100%-64px)] bg-stone-150 mx-400"></div>

                <div className="flex items-center w-[100%-64px] mx-400 my-150">
                    <span className="w-[calc(100%-64px/2)] text-preset-4 ml-400 text-stone-600">Carbs</span>
                    <div className="h-1 w-200"></div>
                    <span
                        className="w-[calc(100%-64px/2)] text-preset-4-bold ml-200 mr-400 text-brown-800">0g</span>
                </div>

                <div className="h-[1px] w-[calc(100%-64px)] bg-stone-150 mx-400"></div>
                <div className="flex items-center w-[100%-64px] mx-400 my-150">
                    <span className="w-[calc(100%-64px/2)] text-preset-4 ml-400 text-stone-600">Protein</span>
                    <div className="h-1 w-200"></div>
                    <span
                        className="w-[calc(100%-64px/2)] text-preset-4-bold ml-200 mr-400 text-brown-800">20g</span>
                </div>


                <div className="h-[1px] w-[calc(100%-64px)] bg-stone-150 mx-400"></div>
                <div className="flex items-center w-[100%-64px] mx-400 my-150 pb-500">
                    <span className="w-[calc(100%-64px/2)] text-preset-4 ml-400 text-stone-600">Fat</span>
                    <div className="h-1 w-200"></div>
                    <span
                        className="w-[calc(100%-64px/2)] text-preset-4-bold ml-200 mr-400 text-brown-800">22g</span>
                </div>
            </div>
        </div>
    </div>
  );
}
