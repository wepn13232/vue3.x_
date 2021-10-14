<template>
	<div class="tableList">
		<!--面包屑-->
		<div class="breadCrumb" ref="breadCrumb">
			<self-bread-crumb :crumbItem="crumbItem"/>
		</div>
		<!--具体内容-->
		<div class="content_info" id="content_info">
			<a-spin :spinning="spinning">
				<div class="white_block" id="white_block">
					<a-table :columns="columns"
							 :data-source="data"
							 :pagination="pagination"
							 :scroll="{y:table_scrollY}"
							 v-if="!spinning"
							 bordered/>
				</div>
			</a-spin>
		</div>
	</div>
</template>

<script>
import SelfBreadCrumb from "@/components/SelfBreadCrumb";
import {onBeforeMount, ref, reactive, onMounted, nextTick, getCurrentInstance, onUpdated} from "vue";

export default {
	name: "tableList",
	components: {SelfBreadCrumb},
	setup(props) {
		let {ctx: that} = getCurrentInstance()
		let breadCrumb = ref();
		const spinning = ref(true);
		let table_scrollY = ref()
		//面包屑数据
		let crumbItem = reactive([
			{name: "首页", path: '/'},
			{name: "表格页", path: 'tableList'}
		])
		//表格数据源
		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
				slots: {customRender: 'name'},
			},
			{
				title: 'Cash Assets',
				className: 'column-money',
				dataIndex: 'money',
			},
			{
				title: 'Address',
				dataIndex: 'address',
			},
		];
		//表格数据
		const data = [
			{
				key: '1',
				name: 'John Brown',
				money: '￥300,000.00',
				address: 'New York No. 1 Lake Park',
			},
			{
				key: '2',
				name: 'Jim Green',
				money: '￥1,256,000.00',
				address: 'London No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '3',
				name: 'Joe Black',
				money: '￥120,000.00',
				address: 'Sidney No. 1 Lake Park',
			},
		];
		//分页配置
		const pagination = {
			pageSize: 10,
			showSizeChanger: true,
			pageSizeOptions: ["10", "20", "50", "100"],//每页中显示的数据
		}


		//设置自适应高度
		const _setHeight = () => {
			const win_h = window.innerHeight
			let bread_h = breadCrumb._value.clientHeight;
			let h = document.getElementById("content_info");
			let w = document.getElementById("white_block")
			h.style.height = win_h - bread_h + 'px';
			w.style.height = win_h - bread_h - 40 + 'px';
			table_scrollY.value = win_h - bread_h - 170 + 'px'
			spinning.value = !spinning.value;
		}
		onMounted(() => {
			_setHeight();
		})


		return {
			breadCrumb,
			crumbItem,
			columns,
			data,
			pagination,
			table_scrollY,
			spinning
		}
	}

}
</script>

<style lang="scss">
.tableList {

}
</style>
