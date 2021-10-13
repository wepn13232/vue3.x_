<template>
	<div class="leftNavBar">
		<a-menu
			id="dddddd"
			style="width: 256px"
			v-model:openKeys="openKeys"
			v-model:selectedKeys="selectedKeys"
			mode="inline"
			@click="handleClick"
		>
			<a-sub-menu key="sub1" @titleClick="titleClick">
				<template #title>测试Vue3项目</template>
				<a-menu-item-group key="g1">
					<!--<template #title>子组</template>-->
					<a-menu-item key="tableList">Table列表</a-menu-item>
					<!--<a-menu-item key="2">其余</a-menu-item>-->
				</a-menu-item-group>
			</a-sub-menu>
		</a-menu>
	</div>
</template>

<script>
import {defineComponent, ref, watch} from 'vue';
import {useRouter} from 'vue-router'

export default {
	name: "leftNavBar",
	setup(props) {
		let router = useRouter(); //引入路由
		const selectedKeys = ref(['tableList']);
		const openKeys = ref(['sub1']);
		//菜单点击事件
		const handleClick = (e) => {
			router.push(`/${e.key}`)
		};
		const titleClick = (e) => {

		};

		//进行监听
		watch(
			() => openKeys,
			val => {
				console.log('openKeys', val);
			},
		);

		return {
			selectedKeys,
			openKeys,

			handleClick,
			titleClick,
		};
	}
}
</script>

<style lang="scss" scoped>
.leftNavBar {
	height: inherit;
	overflow: auto;

	.ant-menu {
		height: 100%;
	}
}
</style>
