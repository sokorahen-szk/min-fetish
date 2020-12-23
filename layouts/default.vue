<template>
	<div>
    <Header />
		<Navigation />
		<main>
			<nuxt />
		</main>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Header from '~/components/Organisms/Header.vue';
import Navigation from '~/components/Organisms/Navigation.vue';

@Component({
	components: {
		Header,
		Navigation
	}
})
export default class Default extends Vue {
	//
}
</script>