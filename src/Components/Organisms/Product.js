function Product() {


    return (
        <div className="recipe__container w-full flex justify-center items-center flex-col my-20">
            <div className="recipe__title w-4/5 flex flex-start items-center text-3xl font-bold">this is title of a recipe</div>
            <div className="summary__container w-4/5 flex flex-start items-center text-justify my-6 "><span className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget. Ipsum suspendisse ultrices gravida dictum fusce ut. At auctor urna nunc id cursus metus aliquam eleifend mi. Scelerisque purus semper eget duis at tellus. Eget gravida cum sociis natoque penatibus et magnis. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Et malesuada fames ac turpis. Dignissim sodales ut eu sem integer vitae justo. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Scelerisque viverra mauris in aliquam sem fringilla. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Amet est placerat in egestas erat.</span></div>
            <div className="recipe__container flex flex-row w-4/5">
                <div className="recipe__text__container flex flex-col w-2/3">
                    <div className="recipe__titles flex flex-row font-bold my-6">
                        <div className="recipe__instructions__title mr-2 border-b-2 w-auto py-2">Instructions</div>
                        <div className="recipe__ingredientes__title mx-2  w-auto py-2 ">Ingredientes</div>
                    </div>
                    <div className="recipe__text text-justify">
                        Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. A cras semper auctor neque vitae. Tellus in metus vulputate eu scelerisque felis imperdiet. Ut faucibus pulvinar elementum integer enim neque. Amet commodo nulla facilisi nullam vehicula. Maecenas pharetra convallis posuere morbi leo urna molestie at. Sagittis eu volutpat odio facilisis. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Tristique et egestas quis ipsum suspendisse. Feugiat in fermentum posuere urna nec tincidunt praesent. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Tincidunt arcu non sodales neque sodales ut etiam sit. Quis enim lobortis scelerisque fermentum dui faucibus. Ultricies tristique nulla aliquet enim tortor. Magna eget est lorem ipsum dolor sit amet consectetur. Id eu nisl nunc mi. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.
                        Facilisis gravida neque convallis a. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Dapibus ultrices in iaculis nunc sed. Commodo sed egestas egestas fringilla. Ornare quam viverra orci sagittis eu volutpat odio. Morbi non arcu risus quis varius. Vel pharetra vel turpis nunc eget lorem. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Turpis massa tincidunt dui ut ornare lectus. Porta lorem mollis aliquam ut. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh.
                    </div>

                </div>
                <div className="recipe__photo__container w-1/3">
                    {/* <img src={productImgUrl} className="flex  w-full h-full rounded-3xl  absolute top-0 left-0" />   */}
                    <img src={'images/test.jpg'} alt="testImageLoadingFailed" />
                </div>
            </div>
        </div>
    );
}

export default Product