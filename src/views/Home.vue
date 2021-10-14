<template>
	<a-config-provider :locale="zhCN">
	<div class="home">
		<!--左边导航栏-->
		<div class="leftNavbar">
			<left-nav-bar/>
		</div>
		<!--右边内容-->
		<div class="right_content">
			<router-view/>
		</div>
	</div>
	</a-config-provider>
</template>

<script>
import LeftNavBar from "@/components/leftNavBar";
import zhCN from 'ant-design-vue/es/locale/zh_CN';


import {onMounted, reactive, ref} from "vue";

export default {
	name: 'Home',
	props: [],
	components: {LeftNavBar},
	setup(props) {
		return {
			zhCN
		}
	}
}
</script>

<style lang="scss">
.home {
	display: flex;

	.leftNavbar {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
	}

	.right_content {
		flex: 1;
		margin-left: 256px;
	}
}
</style>
