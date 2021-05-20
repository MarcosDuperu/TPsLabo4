<template>
<div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px">
    <b-row no-gutters>
     
      <b-col md="6">
           <b-button :href="'/detalleInstrumento/' + instrumentoParam.id" variant="blank" style="width:100%">
            <b-card-img :src="'/img/' + instrumentoParam.imagen" alt="Image" style="min-height:200px; max-height:200px" ></b-card-img>
           </b-button>
        
      </b-col>

      <b-col md="6">
        <b-card-body :title="instrumentoParam.instrumento">
            <b-card-text> <h3>$ {{ instrumentoParam.precio }}</h3> </b-card-text>
            <b-card-text style="color:green" v-if="instrumentoParam.costoEnvio === 'G'"><img :src ="'/img/Camion.png'"/> Envio gratis</b-card-text>
            <b-card-text style="color:red"  v-else>{{ `Costo de Envio Interior de Argentina: $ ${instrumentoParam.costoEnvio}` }}</b-card-text>
          <b-card-text> <p>{{ instrumentoParam.cantidadVendida }} vendidos</p> </b-card-text>
          </b-card-body>
      </b-col>

    </b-row>
  </b-card>
</div>
</template>

<script>
export default {
  props: ["instrumentoParam"]
};
</script>
<style lang=""></style>