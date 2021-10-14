<template>
<div class="SelfBreadCrumb">
	<a-breadcrumb>
		<a-breadcrumb-item v-for="(item,index) in crumbItem" :key="index">{{ item.name }}</a-breadcrumb-item>
	</a-breadcrumb>
</div>
</template>

<script>
export default {
	name: "SelfBreadCrumb",
	props:['crumbItem'],
	setup(props){
		return{}
	}
}
</script>

<style scoped lang="scss">

</style>
