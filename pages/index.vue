<template>
  <v-app class="darken-3">
    <v-content>
      <v-container id="main-container">
        <v-layout wrap>
          <v-flex xs12 sm12 class="pa-2">
            <v-card class="mb-3">
              <v-card-text>
                <h2 class="mb-4">Vente appartement Montpellier</h2>

                <v-layout wrap>
                  <v-flex xs12 sm6>
                    <v-layout wrap>
                      <v-flex xs12 md6 mb-3 pr-2>
                        <h3><v-icon>fmd_good</v-icon> Localisation</h3>
                        <div>- Quartier : Pompignane</div>
                        <div>
                          - Addresse : 900 avenue de la Pompignane, 34000
                          Montpellier
                        </div>
                        <div>- Copropriété - résidence des années 1980 avec jardins</div>
                        <div>- Entièrement sécurisée</div>
                        <div>- Nombreuses places de parking visiteur ou pour une 2ème voiture</div>
                      </v-flex>
                      <v-flex xs12 md6 mb-3 pr-2>
                        <h3><v-icon>solar_power</v-icon> Environnement</h3>
                        <div>- Aucun vis-à-vis, vue dégagée</div>
                        <div>- Trés lumineux et ensolleillé (portes-fenêtres)</div>
                        <div>- Traversant, double exposition : Sud et Nord</div>
                        <div>- Balcons</div>
                        <div>- Nombreux placards aménagés</div>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-layout wrap>
                      <v-flex xs12 md6 mb-3 pr-2>
                        <h3><v-icon>tune</v-icon> Technique</h3>
                        <div>- Entièrement renovée il y a 2 ans avec des matériaux de qualité</div>
                        <div>- Climatisation réversible</div>
                        <div>- Double vitrage aluminium</div>
                        <div>- Ballon d'eau chaude éléctrique 200 litres</div>
                        <div>- DPE B</div>
                        <div>- Volets roulants éléctriques</div>
                        <div>- Ascenceur</div>
                        <div>- Baignoire</div>
                      </v-flex>

                      <v-flex xs12 md6 mb-3>
                        <h3><v-icon>holiday_village</v-icon> Caractéristiques</h3>
                        <div>- 4ème étage sur 6</div>
                        <div>- avec garage (13m²) et cave attenante (3m²)</div>
                        <div>- T3, superficie : <b>74,5 m²</b></div>
                        <div>
                          - prix : <b>280 000 €
                          <i>
                            (3750 €/m²)
                          </i></b>
                        </div>
                        <div>-charge annuelles de copropriété : 1200 € (eau froide, entretien)</div>
                        <div>- taxe foncière : 1500 €</div>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <v-layout wrap>
                  <v-flex xs12 sm12 mb-3>
                    <h3><v-icon>map</v-icon> Plans</h3>
                  </v-flex>

                  <v-flex
                    v-for="(n, index) in plans.length"
                    :key="n"
                    xs12
                    sm6
                    md4
                    d-flex
                  >
                    <v-card flat tile class="d-flex">
                      <div class="pa-1">
                        <v-img
                          :src="plans[index].url"
                          @click="planClicked(index)"
                          aspect-ratio="1"
                          class="grey lighten-2"
                        >
                          <template v-slot:placeholder>
                            <v-layout
                              fill-height
                              align-center
                              justify-center
                              ma-0
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                              ></v-progress-circular>
                            </v-layout>
                          </template>
                        </v-img>
                      </div>
                    </v-card>
                  </v-flex>
                </v-layout>

                <template>
                  <v-dialog v-model="modalPlanVisible" width="80%">
                    <v-card>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary"
                          flat
                          @click="modalPlanVisible = false"
                        >
                          Fermer
                        </v-btn>
                      </v-card-actions>
                      <v-divider></v-divider>

                      <v-card-text class="text-xs-center">
                        <div>image {{ currentPlanIndex }}</div>
                        <img
                          style="max-width: 100%"
                          :srcset="plans[currentPlanIndex].url"
                          alt=""
                        />
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </template>

                rappel url annonce diag dispo sur demande compte rendu ag dispo
                ect
              </v-card-text>
            </v-card>
            <v-card>
              <v-card-text>
                <h3><v-icon>photo_library</v-icon> Photos</h3>

                <v-layout wrap>
                  <v-flex
                    v-for="(n, index) in photos.length"
                    :key="n"
                    xs12
                    sm6
                    md4
                    d-flex
                  >
                    <v-card flat tile class="d-flex">
                      <div class="pa-1">
                        <v-img
                          :src="photos[index].url"
                          @click="imageClicked(index)"
                          aspect-ratio="1"
                          class="grey lighten-2"
                        >
                          <template v-slot:placeholder>
                            <v-layout
                              fill-height
                              align-center
                              justify-center
                              ma-0
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                              ></v-progress-circular>
                            </v-layout>
                          </template>
                        </v-img>
                      </div>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <template>
                <v-dialog v-model="modalPhotoVisible" width="80%">
                  <v-card>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        flat
                        @click="modalPhotoVisible = false"
                      >
                        Fermer
                      </v-btn>
                    </v-card-actions>
                    <v-divider></v-divider>

                    <v-card-text>
                      <v-carousel
                        :cycle="false"
                        v-model="currentPhotoIndex"
                        light
                        height="1000"
                        class="elevation-0"
                      >
                        <v-carousel-item v-for="(item, i) in photos" :key="i">
                          <slot>
                              <v-img
                                contain
                                max-height="1000"
                                :src="photos[i].url"
                                class="grey lighten-2"
                              >
                                <template v-slot:placeholder>
                                  <v-layout
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                                  >
                                    <v-progress-circular
                                      indeterminate
                                      color="grey lighten-5"
                                    ></v-progress-circular>
                                  </v-layout>
                                </template>
                              </v-img>
                          </slot>
                        </v-carousel-item>
                      </v-carousel>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </template>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {
      currentPlanIndex: 0,
      modalPlanVisible: false,
      plans: [
        { url: require("/assets/Plans/01.jpg") },
        { url: require("/assets/Plans/02.jpg") },
        { url: require("/assets/Plans/03.jpg") },
      ],

      currentPhotoIndex: 0,
      modalPhotoVisible: false,
      photos: [
        { url: require("/assets/Photos/01.jpg") },
        { url: require("/assets/Photos/02.jpg") },
        { url: require("/assets/Photos/03.jpg") },
        { url: require("/assets/Photos/04.jpg") },
        { url: require("/assets/Photos/05.jpg") },
        { url: require("/assets/Photos/06.jpg") },
        { url: require("/assets/Photos/07.jpg") },
        { url: require("/assets/Photos/08.jpg") },
        { url: require("/assets/Photos/09.jpg") },
        { url: require("/assets/Photos/10.jpg") },
        { url: require("/assets/Photos/11.jpg") },
        { url: require("/assets/Photos/12.jpg") },
        { url: require("/assets/Photos/13.jpg") },
        { url: require("/assets/Photos/14.jpg") },
        { url: require("/assets/Photos/15.jpg") },
      ],
    };
  },

  created: function () {},

  methods: {
    imageClicked: function (index) {
      this.currentPhotoIndex = index;
      this.modalPhotoVisible = true;
    },

    planClicked: function (index) {
      this.currentPlanIndex = index;
      this.modalPlanVisible = true;
    },
  },
};
</script>

<style lang="scss">
</style>