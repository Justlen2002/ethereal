<template>
  <div class="bg-phone">
    <div id="create_page">
      <div
        class="title-page bg-white border-b border-gray-300 border-solid p-2 flex items-center justify-between"
      >
        <i class="el-icon-back font-bold text-xl"></i>
        <span class="text-center uppercase">新規投稿</span>
        <button class="bg-orange-primary text-white py-1 px-2 rounded-lg">
          投稿
        </button>
      </div>
      <el-upload
        action="#"
        list-type="picture-card"
        class="my-3"
        :auto-upload="false"
      >
        <i slot="default" class="el-icon-picture"></i>
        <div slot="file" slot-scope="{ file }">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
      <el-form
        ref="form"
        :model="form"
        label-width="120px"
        label-position="top"
        class="m-2"
      >
        <h3 class="font-bold text-xl">タグをつけよう</h3>
        <h6 class="text-red-500 mb-5">※項目により必須あり</h6>
        <el-form-item label="① 店舗名">
          <el-select v-model="value" class="w-full">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="② 部門">
          <el-select v-model="value" placeholder="Select" class="w-full">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="③ カテゴリ">
          <el-select v-model="value" placeholder="Select" class="w-full">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="④ エリア/ポジション">
          <el-select v-model="value" placeholder="Select" class="w-full">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="⑤ タグ５">
          <el-select v-model="value" placeholder="Select" class="w-full">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="⑥ タグ６">
          <el-select v-model="value" placeholder="Select" class="w-full">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="⑦ タグ７">
          <el-select v-model="value" placeholder="Select" class="w-full">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="⑧ タグ８">
          <el-select v-model="value" placeholder="Select" class="w-full">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="⑨ フリー入力１">
          <el-select v-model="value" placeholder="Select" class="w-full">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div
      class="bottom-siderbar h-12 flex items-center justify-between bg-white border-t-2 border-gray-300 border-solid"
    >
      <NuxtLink to="/create-new" class="flex-1 text-center">
        <button
          class="bg-orange-primary text-white font-bold ease-in duration-200 py-1 px-2 rounded-xl transition-colors tra"
        >
          <i class="el-icon-circle-plus"></i>
          <span>投稿画面</span>
        </button>
      </NuxtLink>
      <NuxtLink to="/" class="flex-1 text-center">
        <button
          class="hover:bg-orange-primary hover:text-white hover:font-bold ease-in duration-200 py-1 px-2 rounded-xl"
        >
          <i class="el-icon-s-shop"></i>
          <span>TOP画面</span>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import getStorage from 'firebase/storage';

export default Vue.extend({
  name: 'CreateShop',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
      value: '',
    };
  },
  mounted() {
    console.log(this.$fire.firestore.app);
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleRemove(file: any) {
      console.log(file);
    },
    handlePictureCardPreview(file: any) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file: any) {
      console.log(file);
    },
  },
});
</script>
