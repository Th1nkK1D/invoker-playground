<template>
  <div class="h-screen bg-black flex flex-col">
    <header class="p-3 text-white text-center">
      Invoker Playground
    </header>
    <div class="container flex-1 mx-auto">
      <slot />
    </div>
    <footer class="p-3 text-xs text-gray-500 text-center">
      All right reserved
    </footer>
  </div>
</template>
