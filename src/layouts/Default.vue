<template>
  <div class="h-screen bg-black flex flex-col">
    <div class="container flex-1 mx-auto">
      <slot />
    </div>
    <footer class="p-3 text-xs text-gray-500 text-center">
      <a
        href="https://dota2.gamepedia.com/Invoker#Invoked_abilities"
        target="_blank"
        class="hover:underline mr-5"
      >Invoker spells combination</a>
      &copy; Copyright {{ (new Date()).getFullYear() }} - <a
        href="https://github.com/Th1nkK1D/invoker-playground"
        target="_blank"
        class="underline"
      >Made with &lt;3 by Th1nkk1d</a>
    </footer>
  </div>
</template>
