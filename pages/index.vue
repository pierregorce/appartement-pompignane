<template>
  <v-app class="darken-3">
    <v-content>
      <v-container id="main-container">
        <v-layout wrap>
          <v-flex xs12 sm12 class="pa-2">
            <v-card class="mb-3">
              <v-card-text>
                <div class="mb-4">
                  <h2>Vente appartement Montpellier</h2>
                  <h4>- Cause déménagement dans une autre région.</h4>
                  <h4>
                    - 1er contact par email uniquement, pas d'agence :
                    <b>gorce.pierre@gmail.com</b>
                  </h4>
                  <h4>- Plan de financement serieux demandé. Merci.</h4>
                </div>
                <v-layout wrap>
                  <v-flex xs12 md6 mb-3 pr-2>
                    <h3><v-icon>fmd_good</v-icon> Localisation</h3>
                    <div>- Quartier : Pompignane</div>
                    <div>
                      - 900 avenue de la Pompignane, 34000
                      Montpellier
                    </div>
                    <div>
                      - Quatier Pompignane (écoles, commerces, calme : nombreuses maisons individuelles)
                    </div>
                    <div>
                      - Localisation centrale : nombreux accés rapides aux grands axes : aéroport à 10min, centre ville à 5 min, Castelnau-le-Lez, Lattes, Mauguio à environ 5min 
                    </div>

                  </v-flex>
                  <v-flex xs12 md6 mb-3 pr-2>
                    <h3><v-icon>business</v-icon> Copropriété</h3>
                    <div>
                      - Copropriété - résidence des années 1980 avec jardins et
                      arbres
                    </div>
                    <div>- 100 lots</div>
                    <div>- Entièrement sécurisée</div>
                    <div>
                      - Nombreuses places de parking visiteur ou pour une 2ème
                      voiture
                    </div>
                    <div>- Cages d'escaliers et communs repeints en 2021</div>
                    <div>- Façades en bon état (ravalement non prévu)</div>
                  </v-flex>
                  <v-flex xs12 md6 mb-3 pr-2>
                    <h3><v-icon>solar_power</v-icon> Environnement</h3>
                    <div>- 4ème étage sur 6</div>
                    <div>- Aucun vis-à-vis, vue dégagée</div>
                    <div>- Trés lumineux et ensolleillé (portes-fenêtres)</div>
                    <div>- Traversant, double exposition : Sud et Nord</div>
                    <div>- Balcons</div>
                    <div>- Nombreux placards aménagés</div>
                    <div>- Dressing</div>
                    <div>- 2 Chambres</div>
                    <div>- Coin bureau/jeux (démontable facilement)</div>
                  </v-flex>
                  <v-flex xs12 md6 mb-3 pr-2>
                    <h3><v-icon>tune</v-icon> Technique</h3>
                    <div>
                      - Entièrement renové il y a 2 ans avec des matériaux de
                      qualité (chène massif, carrelage, stratifié)
                    </div>
                    <div>- Climatisation réversible</div>
                    <div>- Double vitrage aluminium</div>
                    <div>- Ballon d'eau chaude éléctrique 200 litres</div>
                    <div>- Baignoire</div>
                    <div>- DPE B</div>
                    <div>- Volets roulants éléctriques</div>
                    <div>- Ascenceur</div>
                  </v-flex>
                  <v-flex xs12 md6 mb-3>
                    <h3><v-icon>holiday_village</v-icon> Caractéristiques</h3>
                    <div>
                      - avec garage (<b>14.75m²</b>) et cave attenante
                      (<b>4.5m²</b>)
                    </div>
                    <div>- T3, superficie : <b>74,66 m²</b></div>
                    <div>
                      - prix : <b>285 000 € <i> (~3800 €/m²) </i></b>
                    </div>
                    <div>
                      - charge annuelles de copropriété :
                      <b>~1550 €</b> (eau froide, ascenceur, entretien)
                    </div>
                    <div>- taxe foncière : <b>~1500 €</b></div>
                  </v-flex>

                  <v-flex xs12 md6 mb-3>
                    <div>
                      <h3>
                        <v-icon>file_copy</v-icon> Documents disponibles sur
                        demande
                      </h3>
                    </div>
                    <div>- Diagnostics techniques réalisés en 09/2022</div>
                    <div>- Diagnostics techniques batiment 2020</div>
                    <div>- Compte rendu AG 2022-2021-2020-2019-2018</div>
                    <div>- Reglements de copropriété</div>
                    <div>- Carnet d'entretien</div>
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
                  <v-dialog v-model="modalPlanVisible" width="90%">
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
                        <img
                          style="max-width: 100%"
                          :srcset="plans[currentPlanIndex].url"
                          alt=""
                        />
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </template>
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
                          :aspect-ratio="
                            photos[index].ratio == 1 ? 1 : undefined
                          "
                          contain
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
                <v-dialog v-model="modalPhotoVisible" width="90%">
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

                    <v-card-text class="text-xs-center">
                      <img
                        style="width: 100%; max-width: 1400px"
                        :srcset="photos[currentPhotoIndex].url"
                        alt=""
                      />
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
        { url: require("/assets/Photos/01.jpg"), ratio: null },
        { url: require("/assets/Photos/02.jpg"), ratio: null },
        { url: require("/assets/Photos/03.jpg"), ratio: null },
        { url: require("/assets/Photos/04.jpg"), ratio: null },
        { url: require("/assets/Photos/05.jpg"), ratio: null },
        { url: require("/assets/Photos/15.jpg"), ratio: null },
        { url: require("/assets/Photos/06.jpg"), ratio: null },
        { url: require("/assets/Photos/07.jpg"), ratio: null },
        { url: require("/assets/Photos/08.jpg"), ratio: null },
        { url: require("/assets/Photos/13.jpg"), ratio: null },
        { url: require("/assets/Photos/09.jpg"), ratio: null },
        { url: require("/assets/Photos/10.jpg"), ratio: null },
        { url: require("/assets/Photos/11.jpg"), ratio: 1 },
        { url: require("/assets/Photos/12.jpg"), ratio: 1 },
        { url: require("/assets/Photos/14.jpg"), ratio: null },
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