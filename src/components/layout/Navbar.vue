<template>
    <div class="navbar">

        <v-app-bar app flat dense clipped-left style="background-color: #F48FB1">
            
            <v-btn icon @click="drawer = !drawer">
                <v-icon class="icontify"
                        data-icon="heroicons-outline:menu-alt-4">sort</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-img 
                max-width="150"
                style="cursor: pointer;"
                @click.prevent="scroll" 
                src="@/assets/blogo/logo.png"
            ></v-img>

            <v-spacer></v-spacer>

        </v-app-bar>

        <Sidebar
                :visible="drawer" @close="drawer = false"
                :mode="mode"
             />
    </div>
</template>
<script>

import { mapState } from 'vuex'
export default {
    name: 'navbar',
    
    data () {
        return {
            drawer: true
        }
    },

    components: {
        Sidebar: () => import('./Sidebar')
    },

    computed: {
        ...mapState(['mode'])
    },

    methods: {
            scroll() {
                document.querySelector('#home').scrollIntoView({ behavior: 'smooth' })        
            }
        }
}
</script>