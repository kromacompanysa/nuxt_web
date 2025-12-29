<template>
  <div>
    <DefaultItemListSection :ListSection="listSection" :ItemList="itemList" />
  </div>
</template>

<script setup>
// Load navbar config
const navItems = useAppConfig().navbar;

// 1️⃣ Get "academia"
const section = navItems.find((item) => item.label === "consultorio");

// 2️⃣ Get "cursos virtuales" group
const listSection = section?.items?.find(
  (item) => item.label === "seguros",
) ?? {
  label: "seguros",
  items: [],
};

// 3️⃣ Cards
const itemList = listSection.items ?? [];
</script>
