<template>
  <div class="select-site-logo">
      <div><Img :src="setImage" width="75px" height="auto" /></div>
      <div><CheckBox :name="tag" :ref="tag" large /></div>
  </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'nuxt-property-decorator';
    import CheckBox from '@/components/Atoms/CheckBox.vue';
    import Img from '@/components/Atoms/Img.vue';

    interface TargetSiteLogo {
        id: Number
        label: String
        src: String
    }

    @Component({
        components: {
            CheckBox,
            Img
        }
    })
    export default class SelectSiteLogo extends Vue {
        @Prop(String) tag: string;
        @Prop({ type: String, default: '' }) label: string;

        get setImage(): any {
            const imageSrc: any = this.targetSiteLogos.find( (item) => {
                return (this.$props.label === item.label);
            });

            return imageSrc.src || null;
        }

        private targetSiteLogos: Array<TargetSiteLogo> = [
            { id: 1, label: 'pornhub', src: require('@/assets/images/pornhub.png') },
            { id: 2, label: 'xvideos', src: require('@/assets/images/xvideos.png') },
            { id: 3, label: 'xhamster', src: require('@/assets/images/xhamster.png') },
        ];

    }
</script>