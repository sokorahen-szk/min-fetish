<template>
	<div>
    <Header />
		<main>
			<nuxt />
		</main>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '~/components/Organisms/Header.vue';

@Component({
	components: {
		Header
	}
})
export default class Default extends Vue {
	//
}
</script>