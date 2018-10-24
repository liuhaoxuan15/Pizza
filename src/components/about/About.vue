<template>
    <div>
        <div class="row mb-5">
            <div class="col-4">
                <!-- 导航 -->
                <div class="list-group mb-5">
                    <router-link tag="li" :to="{name : 'historyLink'}" class="nav-link">
                        <a class="list-group-item list-group-item-action">历史订单</a>
                    </router-link>
                    <router-link tag="li" :to="{name : 'contectLink'}" class="nav-link">
                        <a class="list-group-item list-group-item-action">联系我们</a>
                    </router-link>
                    <router-link tag="li" :to="{name : 'orderingGuideLink'}" class="nav-link">
                        <a class="list-group-item list-group-item-action">点餐文档</a>
                    </router-link>
                    <router-link tag="li" :to="{name : 'deliveryLink'}" class="nav-link">
                        <a class="list-group-item list-group-item-action">快递信息</a>
                    </router-link>
                </div>
            </div>
            <div class="col-8">
                <!-- 内容 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
