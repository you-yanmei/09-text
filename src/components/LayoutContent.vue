<template>
    <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane
            key="1"
            tab="最近访问"
            class="flex justify-center items-center"
          >
            <div class="items-center">
              <img src="../assets/images/4.png" alt="" />
              <div>暂无数据</div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="全部仓库" force-render>
            <h1>欢迎使用代码仓库</h1>
            <div>
              代码仓库用于托管基于 GIT 或 SVN 管理的代码库。通过 Review
              合并请求来审查代码变更,版本发布可以用来标记、发布代码版本。
            </div>
            <img src="../assets/images/1.svg" />
            <div>创建代码仓库</div>
            <div>浏览、编辑代码以及查看代码提交记录合并请求</div>
            <img src="../assets/images/2.svg" />
            <div>合并请求</div>
            <div>发起合并请求并遂请协作者Review 变更内容</div>
            <img src="../assets/images/3.svg" />
            <div>代码版本</div>
            <div>发布、标记代码版本</div>
            <Button>创建代码仓库</Button>
          </a-tab-pane>
          <a-tab-pane key="3" tab="开源仓库"> /></a-tab-pane>
        </a-tabs>
</template>