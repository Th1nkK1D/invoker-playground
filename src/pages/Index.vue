<template>
  <Layout>
    <div class="h-full flex flex-col justify-center text-center text-white">
      <GameArea
        :orbs="orbs"
        :spells="spells"
      />
    </div>
  </Layout>
</template>

<page-query>
  query {
    orbs: allOrbList {
      edges {
        node {
          data {
            name
            key
            color
          }
        }
      }
    }
    spells: allSpellList {
      edges {
        node {
          data {
            name
            requiredOrbs
            icon
          }
        }
      }
    }
  }
</page-query>

<script>
import GameArea from '../components/GameArea/GameArea.vue';
import Orb from '../classes/Orb/Orb';
import Spell from '../classes/Spell/Spell';

export default {
  components: {
    GameArea,
  },
  data() {
    return {
      orbs: [],
      spells: [],
    };
  },
  mounted() {
    this.orbs = this.$page.orbs.edges[0].node.data.map(
      ({ name, key, color }) => new Orb(name, key, +color),
    );

    this.spells = this.$page.spells.edges[0].node.data.map(
      ({ name, requiredOrbs, icon }) => new Spell(
        name,
        requiredOrbs.split('').map(requiredOrb => this.orbs.find(({ key }) => key === requiredOrb)),
        icon,
      ),
    );
  },
};
</script>
