<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" style="min-height: 630px"   class="bg-gradient-to-r from-pink-500 to-purple-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">
                        Transform Your Body, Transform Your Life
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-pink-100 md:text-lg">
                        Join our fitness revolution and unlock your full potential with personalized workout plans and expert guidance
                    </p>
                </div>

                <div id="cta-button-container" class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out transform hover:scale-105">
                        Start Your Fitness Journey
                    </a>
                    <a id="mukesh-button" href="#" class="flex-1 text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out transform hover:scale-105">
                        Mukesh
                    </a>
                </div>

                <div id="login-form" class="mt-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <form class="space-y-4">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-pink-100">Email</label>
                            <input type="email" id="email" class="bg-purple-100 bg-opacity-20 border border-purple-300 text-white text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 placeholder-pink-200" placeholder="name@example.com" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-pink-100">Password</label>
                            <input type="password" id="password" class="bg-purple-100 bg-opacity-20 border border-purple-300 text-white text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5" required>
                        </div>
                        <button type="submit" class="w-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out transform hover:scale-105">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
