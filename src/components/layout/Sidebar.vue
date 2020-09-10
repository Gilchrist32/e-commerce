<template>
    <v-navigation-drawer v-model="show" clipped app :class="mode ? 'nav-drawer' : undefined" fixed
        src="@/assets/img/sidebar.jpg"
    >
        <v-layout>
            <v-flex>
                <v-list dense>
                    <v-list-item class="justify-center mt-12">
                        <v-img 
                            max-width="250"
                            style="cursor: pointer;"
                            @click.prevent="scroll" 
                            src="@/assets/img/ECOSHOP.svg"
                        ></v-img>
                    </v-list-item>
                    
                    <br>

                    <v-divider class="mx-4"></v-divider>

                    <v-list
                        nav
                        dense
                    >
                        <div  v-for="(nav, index) in navItems" :key="index">
                            <scroll-link :href="`#${nav.to}`">
                                <v-list-item link>
                                    <v-list-item-icon>
                                        <v-icon left>{{ nav.icon }}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title id="title">{{ nav.text }}</v-list-item-title>
                                </v-list-item>
                            </scroll-link>
                        </div>

                        <br>

                        <v-list-item>
                            <v-btn depressed block text @click="authDialog = true">
                                <v-icon left>mdi-login</v-icon>
                                <span class="text-capitalize">Log In</span>
                            </v-btn>
                        </v-list-item>
                        <v-list-item>
                            <v-btn depressed text block @click="authDialog = true">
                                <v-badge left color="green">
                                <span slot="badge">0</span>
                                <v-icon left>mdi-cart</v-icon>
                                <span class="text-capitalize">Cart</span>
                                </v-badge>
                            </v-btn>
                        </v-list-item>
                    </v-list>
                </v-list>
            </v-flex>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'side-bar',
        props: ['visible'],
        components: {
            ScrollLink: () => import('@/components/mixin/ScrollLink')
        },

        computed: {
        show: {
            get () {
            return this.visible
            },
            set (value) {
            if (!value) {
                this.$emit('close')
            }
            }
        },
        ...mapState(['mode'])
        },
        data () {
            return {
                navItems: [
                    { icon: 'mdi-home-outline', text: 'Home', to: 'home' },
                    { icon: 'mdi-store-outline', text: 'Store', to: 'store' },
                    { icon: 'mdi-panorama', text: 'Features', to: 'features' },
                    { icon: 'mdi-information-outline', text: 'About', to: 'about' },
                    { icon: 'mdi-layers-outline', text: 'Services', to: 'services' },

                ]
            }
        }
    }
</script>

<style scoped>
.text-title {
    font-family: 'Poppins', sans-serif !important;
    font-stretch: expanded !important; 
    font-size: 1.8rem !important;
}
.nav-drawer {
    background-color: rgb(251 253 255);
}

</style>