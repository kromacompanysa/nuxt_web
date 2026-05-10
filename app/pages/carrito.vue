<template>
  <div class="p-10 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Carrito</h1>

    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">Img</div>
          <div>
            <p class="font-medium">Producto ejemplo</p>
            <p class="text-sm text-gray-500">$29.99</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button class="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">−</button>
          <span class="w-8 text-center">1</span>
          <button class="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">+</button>
          <button class="text-red-500 hover:text-red-700 text-sm ml-4">Eliminar</button>
        </div>
      </div>
    </div>

    <div class="mt-8 pt-6 border-t">
      <div class="flex justify-between text-lg">
        <span>Total:</span>
        <span class="font-bold">$29.99</span>
      </div>
      <button class="mt-4 w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
        Proceder al pago
      </button>
    </div>
  </div>
</template>