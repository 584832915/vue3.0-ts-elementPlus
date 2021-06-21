 <template>
  <div>
    <div style="margin-bottom:20px">在 3.x 中，过滤器已删除，不再支持。相反地，我们建议用方法调用或计算属性替换它们。</div>
    <ISearchForm :serachConfig='serachConfig'></ISearchForm>
    <ITable :tableData="tableData" :configs="configs"></ITable>

  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, ComputedRef, defineComponent, onMounted, ref } from "vue";
import { IGlobalState } from "@/store/index";
import {
  ListType,
  TableType,
  configType,
  serachConfigType
} from "@/typings/table";
import ITable from "./component/ITable.vue";
import ISearchForm from "./component/ISearchForm.vue";
import { getItemList } from "@/api/api";
interface ResType {
  userTableData: ListType[];
}
export default defineComponent({
  components: { ITable, ISearchForm },
  setup() {
    const store = useStore<IGlobalState>();
    const configs: configType[] = [
      {
        label: "姓名",
        prop: "name",
        filterFun: "strNull"
      },
      {
        label: "时间",
        prop: "date",
        filterFun: "strNull"
      },
      {
        label: "省",
        prop: "province",
        filterFun: "strNull"
      },
      {
        label: "市",
        prop: "city",
        filterFun: "strNull"
      },
      {
        label: "详细地址",
        prop: "address",
        filterFun: "strNull"
      }
    ];
    const serachConfig: serachConfigType[] = [
      {
        type: "input",
        label: "输入框",
        modelName: "employerInfo",
        placeholder: ""
      },
      {
        type: "select",
        label: "请选择",
        modelName: "orderStatus",
        options: [
          { label: "全部", value: "" },
          { label: "分类1", value: "-2" },
          { label: "分类2", value: "-1" }
        ]
      }
    ];
    const type: ComputedRef<TableType> = computed(
      () => store.state.table.currentType
    );
    const tableData = ref<ListType[]>([]);
    const pageChange = async (val?: number) => {
      const { code, data } = await getItemList<ResType>();
      if (code == 200) {
        tableData.value = data.userTableData;
        console.log(tableData);
      }
    };
    onMounted(() => {
      pageChange();
    });
    return {
      type,
      tableData,
      configs,
      serachConfig,
      pageChange
    };
  }
});
</script>

<style scoped lang="scss">
</style>
