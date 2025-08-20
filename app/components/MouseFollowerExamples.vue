<template>
    <div class="space-y-6">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('examples.mouseFollower.title') }}</h4>
        
        <!-- Interactive Elements Section -->
        <div class="space-y-4">
            <h5 class="text-md font-medium text-gray-700 dark:text-gray-300">{{ $t('examples.mouseFollower.interactive') }}</h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <UButton 
                    color="primary" 
                    data-cursor-text="Click me!"
                    class="w-full"
                >
                    {{ $t('examples.mouseFollower.button') }}
                </UButton>
                <UButton 
                    color="gray" 
                    variant="soft"
                    data-cursor-text="Explore"
                    class="w-full"
                >
                    {{ $t('examples.mouseFollower.softButton') }}
                </UButton>
                <UButton 
                    color="green" 
                    variant="outline"
                    data-cursor-text="Learn more"
                    class="w-full"
                >
                    {{ $t('examples.mouseFollower.outlineButton') }}
                </UButton>
            </div>
        </div>

        <!-- Project Cards Section -->
        <div class="space-y-4">
            <h5 class="text-md font-medium text-gray-700 dark:text-gray-300">{{ $t('examples.mouseFollower.projectCards') }}</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UCard 
                    class="cursor-pointer transition-transform hover:scale-105"
                    data-cursor-text="View Details"
                >
                    <template #header>
                        <div class="flex items-center">
                            <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 text-blue-500 mr-2" />
                            <h3 class="text-lg font-semibold">{{ $t('examples.mouseFollower.project1.title') }}</h3>
                        </div>
                    </template>
                    <p class="text-gray-600 dark:text-gray-300">
                        {{ $t('examples.mouseFollower.project1.description') }}
                    </p>
                </UCard>

                <UCard 
                    class="cursor-pointer transition-transform hover:scale-105"
                    data-cursor-text="Explore Project"
                >
                    <template #header>
                        <div class="flex items-center">
                            <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-purple-500 mr-2" />
                            <h3 class="text-lg font-semibold">{{ $t('examples.mouseFollower.project2.title') }}</h3>
                        </div>
                    </template>
                    <p class="text-gray-600 dark:text-gray-300">
                        {{ $t('examples.mouseFollower.project2.description') }}
                    </p>
                </UCard>
            </div>
        </div>

        <!-- Text Effects Section -->
        <div class="space-y-4">
            <h5 class="text-md font-medium text-gray-700 dark:text-gray-300">{{ $t('examples.mouseFollower.textEffects') }}</h5>
            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p class="text-gray-700 dark:text-gray-300 mb-2">
                    {{ $t('examples.mouseFollower.textDemo.intro') }}
                    <span 
                        data-cursor-text="Custom message!"
                        class="text-primary-600 dark:text-primary-400 font-medium cursor-pointer"
                    >
                        {{ $t('examples.mouseFollower.textDemo.hoverText') }}
                    </span>
                    {{ $t('examples.mouseFollower.textDemo.middle') }}
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                    <span 
                        data-cursor-text="Sticky cursor" 
                        data-cursor-stick
                        class="text-blue-600 dark:text-blue-400 font-medium cursor-pointer"
                    >
                        {{ $t('examples.mouseFollower.textDemo.stickyText') }}
                    </span>
                    {{ $t('examples.mouseFollower.textDemo.outro') }}
                </p>
            </div>
        </div>

        <!-- Special States Section -->
        <div class="space-y-4">
            <h5 class="text-md font-medium text-gray-700 dark:text-gray-300">{{ $t('examples.mouseFollower.specialStates') }}</h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                    data-cursor="-inverse" 
                    class="p-4 bg-gray-900 text-white rounded-lg text-center cursor-pointer"
                >
                    <UIcon name="i-heroicons-moon" class="w-6 h-6 mx-auto mb-2" />
                    <p class="text-sm">{{ $t('examples.mouseFollower.states.inverse') }}</p>
                </div>
                
                <div 
                    data-cursor="-hidden" 
                    class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-center cursor-pointer"
                >
                    <UIcon name="i-heroicons-eye-slash" class="w-6 h-6 mx-auto mb-2 text-red-500" />
                    <p class="text-sm text-red-700 dark:text-red-400">{{ $t('examples.mouseFollower.states.hidden') }}</p>
                </div>

                <div 
                    class="theme p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-center cursor-pointer"
                    data-cursor-text="Theme Element"
                >
                    <UIcon name="i-heroicons-paint-brush" class="w-6 h-6 mx-auto mb-2" />
                    <p class="text-sm">{{ $t('examples.mouseFollower.states.theme') }}</p>
                </div>
            </div>
        </div>

        <!-- Media Section (Images & Videos) -->
        <div class="space-y-4">
            <h5 class="text-md font-medium text-gray-700 dark:text-gray-300">{{ $t('examples.mouseFollower.mediaEffects') }}</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Sample Images -->
                <div 
                    class="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg text-center cursor-pointer border border-blue-200 dark:border-blue-800 transition-transform hover:scale-105"
                    data-cursor-img="https://picsum.photos/400/300?random=1"
                >
                    <UIcon name="i-heroicons-photo" class="w-8 h-8 mx-auto mb-3 text-blue-500" />
                    <h6 class="font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('examples.mouseFollower.media.image1.title') }}</h6>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('examples.mouseFollower.media.image1.description') }}</p>
                </div>

                <div 
                    class="p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg text-center cursor-pointer border border-green-200 dark:border-green-800 transition-transform hover:scale-105"
                    data-cursor-img="https://picsum.photos/400/300?random=2"
                >
                    <UIcon name="i-heroicons-camera" class="w-8 h-8 mx-auto mb-3 text-green-500" />
                    <h6 class="font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('examples.mouseFollower.media.image2.title') }}</h6>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('examples.mouseFollower.media.image2.description') }}</p>
                </div>

                <!-- Sample Video -->
                <div 
                    class="p-6 bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg text-center cursor-pointer border border-red-200 dark:border-red-800 transition-transform hover:scale-105"
                    data-cursor-video="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                >
                    <UIcon name="i-heroicons-play" class="w-8 h-8 mx-auto mb-3 text-red-500" />
                    <h6 class="font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('examples.mouseFollower.media.video.title') }}</h6>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('examples.mouseFollower.media.video.description') }}</p>
                </div>
            </div>
        </div>

        <!-- Sticky Effect Section -->
        <div class="space-y-4">
            <h5 class="text-md font-medium text-gray-700 dark:text-gray-300">{{ $t('examples.mouseFollower.stickyEffects') }}</h5>
            <div class="relative bg-gray-100 dark:bg-gray-800 rounded-lg p-8 overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div 
                        data-cursor-stick 
                        class="sticky-demo bg-primary-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold cursor-pointer shadow-lg transition-transform hover:scale-110 mx-auto"
                    >
                        <span class="text-sm">{{ $t('examples.mouseFollower.sticky.element1') }}</span>
                    </div>
                    
                    <div 
                        data-cursor-stick="#stick-target" 
                        class="text-center cursor-pointer p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md transition-transform hover:scale-105"
                    >
                        <p class="text-gray-700 dark:text-gray-300 mb-3">{{ $t('examples.mouseFollower.sticky.hover') }}</p>
                        <div 
                            id="stick-target"
                            class="bg-yellow-400 text-yellow-900 rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto shadow-md"
                        >
                            {{ $t('examples.mouseFollower.sticky.element2') }}
                        </div>
                    </div>
                </div>
                
                <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                    {{ $t('examples.mouseFollower.sticky.description') }}
                </p>
            </div>
        </div>

        <!-- Skewing Effect Section -->
        <div class="space-y-4">
            <h5 class="text-md font-medium text-gray-700 dark:text-gray-300">{{ $t('examples.mouseFollower.skewingEffects') }}</h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <UCard 
                    class="cursor-pointer text-center transition-transform hover:scale-105"
                    @mouseenter="setSkewing(2)"
                    @mouseleave="removeSkewing()"
                >
                    <div class="p-4">
                        <UIcon name="i-heroicons-arrows-right-left" class="w-8 h-8 mx-auto mb-3 text-orange-500" />
                        <h6 class="font-semibold mb-2">{{ $t('examples.mouseFollower.skewing.light') }}</h6>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('examples.mouseFollower.skewing.lightDesc') }}</p>
                    </div>
                </UCard>

                <UCard 
                    class="cursor-pointer text-center transition-transform hover:scale-105"
                    @mouseenter="setSkewing(5)"
                    @mouseleave="removeSkewing()"
                >
                    <div class="p-4">
                        <UIcon name="i-heroicons-arrows-up-down" class="w-8 h-8 mx-auto mb-3 text-purple-500" />
                        <h6 class="font-semibold mb-2">{{ $t('examples.mouseFollower.skewing.strong') }}</h6>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('examples.mouseFollower.skewing.strongDesc') }}</p>
                    </div>
                </UCard>

                <UCard 
                    class="cursor-pointer text-center transition-transform hover:scale-105"
                    @mouseenter="setSkewing(10)"
                    @mouseleave="removeSkewing()"
                >
                    <div class="p-4">
                        <UIcon name="i-heroicons-arrows-pointing-out" class="w-8 h-8 mx-auto mb-3 text-red-500" />
                        <h6 class="font-semibold mb-2">{{ $t('examples.mouseFollower.skewing.extreme') }}</h6>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('examples.mouseFollower.skewing.extremeDesc') }}</p>
                    </div>
                </UCard>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Mouse Follower examples demonstrating various cursor states and interactions

// Access MouseFollower instance from the global window object (set by the plugin)
const setSkewing = (factor: number) => {
  if (typeof window !== 'undefined' && (window as any).mouseFollower) {
    (window as any).mouseFollower.setSkewing(factor)
  }
}

const removeSkewing = () => {
  if (typeof window !== 'undefined' && (window as any).mouseFollower) {
    (window as any).mouseFollower.removeSkewing()
  }
}
</script>
