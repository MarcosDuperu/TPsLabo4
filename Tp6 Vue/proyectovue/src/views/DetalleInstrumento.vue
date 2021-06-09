<template>
  <div>
    <b-container fluid style="max-width: 800px">
      <b-row no-gutters>
        <b-col>
          <b-card-img
            :src="'/img/' + instrumentoEncontrado.imagen"
            alt="Image"
            style="min-height: 80px; max-height: 350px"
          >
          </b-card-img>
          <br />
          <tr />
          Descripcion:
          <b-card-text>{{ instrumentoEncontrado.descripcion }}</b-card-text>
        </b-col>

        <b-col>
          <b-card-text
            ><p>{{ instrumentoEncontrado.cantidadVendida }} vendidos</p>
          </b-card-text>
          <b-card-body :title="instrumentoEncontrado.instrumento">
            <b-card-text>
              <h3>$ {{ instrumentoEncontrado.precio }}</h3></b-card-text
            >
            <b-card-text
              >Marca: {{ instrumentoEncontrado.marca }} <br />
              Modelo: {{ instrumentoEncontrado.modelo }}</b-card-text
            >

            <b-card-text
              style="color: green"
              v-if="instrumentoEncontrado.costoEnvio === 'G'"
              ><img :src="'/img/Camion.png'" /> Envio gratis</b-card-text
            >
            <b-card-text style="color: red" v-else>{{
              `Costo de Envio Interior de Argentina: $ ${instrumentoEncontrado.costoEnvio}`
            }}</b-card-text>
            <b-col>
              <b-button href="/producto" variant="outline-primary"
                >VOLVER</b-button
              >
              <b-button style="margin: 1rem" href="" variant="outline-success"
                >Agregar al Carrito</b-button
              >
            </b-col>
          </b-card-body>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "DetalleInstrumento",
  components: {},
  mounted() {
    this.getInstrumentoXID();
  },
  data() {
    return {
      instrumentoEncontrado: [],
    };
  },
  methods: {
    /* async getInstrumentoXID() {
      const parametroId = this.$route.params.id;
      const res = await fetch("/instrumentos.json");
      const resJson = await res.json();
      console.log(resJson);
      this.instrumentoEncontrado = await resJson.instrumentos.find(
        instrumento => instrumento.id === parametroId
      );
      console.log(this.instrumentoEncontrado);
    } */
    async getInstrumentoXID() {
      const parametroId = this.$route.params.id;
      const res = await fetch(
        `http://localhost:3000/api/instrumento/${parametroId}`
      );
      const resJson = await res.json();
      this.instrumentoEncontrado = resJson;
    },
  },
};
</script>
