<template>
	<div class="home">
		<!--左边导航栏-->
		<div class="leftNavbar">
			<left-nav-bar/>
		</div>
		<!--右边内容-->
		<div class="right_content">
			<!--面包屑-->
			<div class="breadCrumb" ref="breadCrumb">
				<self-bread-crumb/>
			</div>
			<!--具体内容-->
			<div class="content_info" id="content_info">
				<div class="white_block" id="white_block">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import LeftNavBar from "@/components/leftNavBar";
import SelfBreadCrumb from "@/components/SelfBreadCrumb";
import {onMounted, ref} from "vue";

export default {
	name: 'Home',
	components: {SelfBreadCrumb, LeftNavBar},
	props:[],
	setup(props) {
		let breadCrumb = ref(null)
		//设置自适应高度
		const _setHeight = () => {
			const win_h = window.innerHeight
			let bread_h = breadCrumb._value.clientHeight;
			let h = document.getElementById("content_info");
			let w = document.getElementById("white_block")
			h.style.height = win_h - bread_h + 'px';
			w.style.height = win_h - bread_h - 40 + 'px';
		}

		onMounted(() => {
			_setHeight();
		})

		return {
			breadCrumb
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

		.breadCrumb {
			padding: 10px;
		}

		.content_info {
			background-color: #f3f3f6;
			padding: 20px;

			.white_block {
				background-color: #ffffff;
				border-radius: 4px;
				padding: 10px;
				overflow: auto;
			}
		}
	}
}
</style>
