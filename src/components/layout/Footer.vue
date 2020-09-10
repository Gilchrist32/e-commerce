<template>
  <v-footer padless>
    <v-card flat tile id="footer">
      <div class="footer-above white--text">
        <div class="container">
          <div class="row">
            <div class="footer-col col-md-4 text-center">
                    <v-img src="@/assets/blogo/logo.png" alt="logo" width="150px" class="mx-auto"></v-img>
                     <span class="name">
                      Our Purpose Is to Sustainably Make the Pleasure and
                      Benefits of Fashion Accesible to the Many.
                    </span>
            </div>

            <div class="footer-col col-md-3 mx-auto">
                   <h5 class="ttitle">Useful Links</h5>
                   <hr class="red accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px" /><br>
                  <span>About</span><br>
                  <span>Features</span><br>
                  <span>Services</span>
              </div>

              <div class="footer-col col-md-3">
                    <h5 class="ttitle">FOLLOW US</h5>
                    <hr class="red accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 80px" /><br>

                    <b-avatar href="" target="_blank"  v-b-tooltip.hover title="Add or Follow us on Facebook"><font-awesome-icon :icon="['fab', 'facebook']" />
                    <small class="ml-3">Facebook</small>
                    </b-avatar><br>

                    <b-avatar href="" target="_blank" v-b-tooltip.hover title="Add or Follow us on Twitter"><font-awesome-icon :icon="['fab', 'twitter']" />
                    <small class="ml-3">Twitter</small>
                    </b-avatar><br>

                    <b-avatar href="" target="_blank" v-b-tooltip.hover title="Add or Follow us on Linkedin"><font-awesome-icon :icon="['fab', 'linkedin']" />
                    <small class="ml-3">Linkedin</small>
                    </b-avatar><br>

                    <b-avatar href="" target="_blank" v-b-tooltip.hover title="Add or Follow us on Instagram"><font-awesome-icon :icon="['fab', 'instagram']" />
                    <small class="ml-3">Instagram</small>
                    </b-avatar><br>
                  
                </div>
          </div>
        </div>
      </div>

      <v-divider></v-divider>

      <div class="white--text pt-0 mt-auto">
        <div class="footer-copyright text-center py-0">
          <v-container fluid>
          &copy; {{ new Date().getFullYear() }}  Shopee Store E-Commerce
        </v-container>
      </div>
    </div>
    </v-card>
  </v-footer>
</template>

<style scoped>
#footer{
  background-color: #0e152c;
}
span{
  font-size: 12px;
}
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  name: 'footer'
};
</script>