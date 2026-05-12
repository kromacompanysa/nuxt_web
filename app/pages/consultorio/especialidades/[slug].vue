<template>
  <ConsultorioCalendar />
</template>

<script setup>
definePageMeta({
  layout: 'consultorio'
});

const route = useRoute();
const navItems = useAppConfig().navbar;

const consultorioSection = navItems.find((item) => item.label === "consultorio");
const especialidadesSection = consultorioSection?.items?.find(
  (item) => item.label === "especialidades"
);

const especialidadItem = especialidadesSection?.items?.find((item) =>
  item.href?.endsWith(`/${route.params.slug}`)
);

useHead({
  title: `${especialidadItem?.label ?? 'Especialidad'} | Kroma`
});
</script>
