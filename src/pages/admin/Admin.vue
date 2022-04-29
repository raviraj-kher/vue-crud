<template>
  <NavView />
  <SidebarView />
  <router-view/> 
</template>

<script>
import NavView from '@/components/Nav'
import SidebarView from '@/components/Sidebar'
export default {
    name: 'AdminPage',
    components: {NavView, SidebarView}
}
</script>

<style>

</style>