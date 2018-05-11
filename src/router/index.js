import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'
import Login from './../components/Login'
import Test from './../components/Test'    //方元测试elementui

Vue.use(Router)

//工作台
import WorkbenchIndex from './../components/workbench/Index'


//统计
import StatisticsIndex from './../components/statistics/Index'

import PurchaseType from './../components/statistics/purchaseType/Index'

import Accounting from './../components/statistics/purchaseType/accounting/Index'
import GeneralLedger from './../components/statistics/purchaseType/accounting/generalLedger/Index'
import MarginCallsView from './../components/statistics/purchaseType/accounting/marginCallsView/Index'

import EnterpriseAssets from './../components/statistics/purchaseType/enterpriseAssets/Index'

import OrderAtatistics from './../components/statistics/purchaseType/orderAtatistics/Index'
import OrderView from './../components/statistics/purchaseType/orderAtatistics/orderView/Index'
import OrderTypeView from './../components/statistics/purchaseType/orderAtatistics/orderTypeView/Index'

import InvoicesAtatistics from './../components/statistics/purchaseType/invoicesAtatistics/Index'
import EntryInvoice from './../components/statistics/purchaseType/invoicesAtatistics/entryInvoice/Index'
import SettleInvoice from './../components/statistics/purchaseType/invoicesAtatistics/settleInvoice/Index'


import PartnersAssets from './../components/statistics/partnersAssets/Index'

import Inventory from './../components/statistics/inventory/Index'
import WarehouseOverview from './../components/statistics/inventory/warehouseOverview/Index'
import WarehouseQuery from './../components/statistics/inventory/warehouseQuery/Index'
import RiseAndLoss from './../components/statistics/inventory/riseAndLoss/Index'



//后台账户管理
import backstageAccountIndex from './../components/backstageAccount/Index'
//账户
import Account from './../components/backstageAccount/account/Account'
import AddAccount from './../components/backstageAccount/account/AddAccount'
import DeliveryChoice from './../components/backstageAccount/account/DeliveryChoice'
import EditAccount from './../components/backstageAccount/account/EditAccount'
import CheckAccount from './../components/backstageAccount/account/CheckAccount'
//角色
import Role from './../components/backstageAccount/role/Role'
import AddRole from './../components/backstageAccount/role/addRole'
import RoleAuthority from './../components/backstageAccount/role/RoleAuthority'
import RoleAuthoritySee from './../components/backstageAccount/role/RoleAuthoritySee'

import WarehousePower from './../components/backstageAccount/warehousePower/Index'
import WarehousePowerView from './../components/backstageAccount/warehousePower/WarehouseView'
import WarehousePowerEdit from './../components/backstageAccount/warehousePower/WarehouseEdit'

import BusinessManageIndex from './../components/backstageAccount/Index'

import BusinessManageUsersIndex from './../components/backstageAccount/businessManage/users/Index'

import BusinessManageUsersList from './../components/backstageAccount/businessManage/users/list/Index'
import BusinessManageUsersListIndex from './../components/backstageAccount/businessManage/users/list/pages/Index'
import BusinessManageUsersListAdd from './../components/backstageAccount/businessManage/users/list/pages/Add'
import BusinessManageUsersListEditor from './../components/backstageAccount/businessManage/users/list/pages/Editor'
import BusinessManageUsersListView from './../components/backstageAccount/businessManage/users/list/views/BaseInfo'


import BusinessManageUsersAttri from './../components/backstageAccount/businessManage/users/attri/Index'
import BusinessManageUsersAttriIndex from './../components/backstageAccount/businessManage/users/attri/pages/Index'
import BusinessManageUsersAttriEditor from './../components/backstageAccount/businessManage/users/attri/pages/Editor'
import BusinessManageUsersSign from './../components/backstageAccount/businessManage/users/sign/Index'
import BusinessManageUsersSignIndex from './../components/backstageAccount/businessManage/users/sign/pages/Index'
import BusinessManageUsersSignEditor from './../components/backstageAccount/businessManage/users/sign/pages/Editor'
import BusinessManageUsersSignAdd from './../components/backstageAccount/businessManage/users/sign/pages/Add'
import BusinessManageUsersBank from './../components/backstageAccount/businessManage/users/bank/Index'
import BusinessManageUsersBankIndex from './../components/backstageAccount/businessManage/users/bank/pages/Index'
import BusinessManageUsersBankEditor from './../components/backstageAccount/businessManage/users/bank/pages/Editor'
import BusinessManageUsersBankAdd from './../components/backstageAccount/businessManage/users/bank/pages/Add'
import BusinessManageUsersInvoices from './../components/backstageAccount/businessManage/users/invoices/Index'
import BusinessManageUsersInvoicesIndex from './../components/backstageAccount/businessManage/users/invoices/pages/Index'
import BusinessManageUsersInvoicesEditorList from './../components/backstageAccount/businessManage/users/invoices/pages/EditorList'
import BusinessManageUsersInvoicesAdd from './../components/backstageAccount/businessManage/users/invoices/pages/Add'
import BusinessManageUsersInvoicesEditor from './../components/backstageAccount/businessManage/users/invoices/pages/Editor'
import BusinessManageUsersAdmittance from './../components/backstageAccount/businessManage/users/admittance/Index'
import BusinessManageUsersAdmittanceList from './../components/backstageAccount/businessManage/users/admittance/pages/Index'
import BusinessManageUsersAdmittanceUpdateList from './../components/backstageAccount/businessManage/users/admittance/pages/UpdateList'
import BusinessManageUsersAdmittanceAdd from './../components/backstageAccount/businessManage/users/admittance/pages/Add'
import BusinessManageUsersAdmittanceUpdate from './../components/backstageAccount/businessManage/users/admittance/pages/Update'
import BusinessManageUsersAdmittanceUpdateBefore from './../components/backstageAccount/businessManage/users/admittance/pages/UpdateBefore'
        

import BusinessManageUsersInviteBids from './../components/backstageAccount/businessManage/users/inviteBids/Index'
import BusinessManageUsersInviteBidsIndex from './../components/backstageAccount/businessManage/users/inviteBids/pages/Index'
import BusinessManageUsersInviteBidsEditor from './../components/backstageAccount/businessManage/users/inviteBids/pages/editor'
import BusinessManageUsersIncorrupt from './../components/backstageAccount/businessManage/users/incorrupt/Index'

import BusinessManageTransportIndex from './../components/backstageAccount/businessManage/transport/Index'
import BusinessManageTransportCompany from './../components/backstageAccount/businessManage/transport/company/Index'
import BusinessManageTransportCompanyAdd from './../components/backstageAccount/businessManage/transport/company/Add'
import BusinessManageTransportCompanySee from './../components/backstageAccount/businessManage/transport/company/See'
import BusinessManageTransportCompanyDeal from './../components/backstageAccount/businessManage/transport/company/Deal'
import BusinessManageTransportBank from './../components/backstageAccount/businessManage/transport/bank/Index'
import BusinessManageTransportBankSee from './../components/backstageAccount/businessManage/transport/bank/See'
import BusinessManageTransportBankAdd from './../components/backstageAccount/businessManage/transport/bank/Add'
import BusinessManageTransportBankBianji from './../components/backstageAccount/businessManage/transport/bank/Bianji'
import BusinessManageTransportBankBianji2 from './../components/backstageAccount/businessManage/transport/bank/Bianji2'

import BusinessManagePortsIndex from './../components/backstageAccount/businessManage/ports/Index'
import BusinessManagePortsCompany from './../components/backstageAccount/businessManage/ports/company/Index'
import BusinessManagePortsCompanyAdd from './../components/backstageAccount/businessManage/ports/company/Add'
import BusinessManagePortsCompanySee from './../components/backstageAccount/businessManage/ports/company/See'
import BusinessManagePortsCompanyDeal from './../components/backstageAccount/businessManage/ports/company/Deal'
import BusinessManagePortsBank from './../components/backstageAccount/businessManage/ports/bank/Index'
import BusinessManagePortsBankSee from './../components/backstageAccount/businessManage/ports/bank/See'
import BusinessManagePortsBankAdd from './../components/backstageAccount/businessManage/ports/bank/Add'
import BusinessManagePortsBankBianji from './../components/backstageAccount/businessManage/ports/bank/Bianji'
import BusinessManagePortsBankBianji2 from './../components/backstageAccount/businessManage/ports/bank/Bianji2'

import BusinessManageLaboratoryIndex from './../components/backstageAccount/businessManage/laboratory/Index'
import BusinessManageLaboratoryCompany from './../components/backstageAccount/businessManage/laboratory/company/Index'
import BusinessManageLaboratoryCompanyAdd from './../components/backstageAccount/businessManage/laboratory/company/Add'
import BusinessManageLaboratoryCompanySee from './../components/backstageAccount/businessManage/laboratory/company/See'
import BusinessManageLaboratoryCompanyDeal from './../components/backstageAccount/businessManage/laboratory/company/Deal'
import BusinessManageLaboratoryBank from './../components/backstageAccount/businessManage/laboratory/bank/Index'
import BusinessManageLaboratoryBankSee from './../components/backstageAccount/businessManage/laboratory/bank/See'
import BusinessManageLaboratoryBankAdd from './../components/backstageAccount/businessManage/laboratory/bank/Add'
import BusinessManageLaboratoryBankBianji from './../components/backstageAccount/businessManage/laboratory/bank/Bianji'
import BusinessManageLaboratoryBankBianji2 from './../components/backstageAccount/businessManage/laboratory/bank/Bianji2'

import BusinessManageOthersIndex from './../components/backstageAccount/businessManage/others/Index'
import BusinessManageOthersCompany from './../components/backstageAccount/businessManage/others/company/Index'
import BusinessManageOthersCompanyAdd from './../components/backstageAccount/businessManage/others/company/Add'
import BusinessManageOthersCompanySee from './../components/backstageAccount/businessManage/others/company/See'
import BusinessManageOthersCompanyDeal from './../components/backstageAccount/businessManage/others/company/Deal'
import BusinessManageOthersBank from './../components/backstageAccount/businessManage/others/bank/Index'
import BusinessManageOthersBankSee from './../components/backstageAccount/businessManage/others/bank/See'
import BusinessManageOthersBankAdd from './../components/backstageAccount/businessManage/others/bank/Add'
import BusinessManageOthersBankBianji from './../components/backstageAccount/businessManage/others/bank/Bianji'
import BusinessManageOthersBankBianji2 from './../components/backstageAccount/businessManage/others/bank/Bianji2'


//前台账户管理  frontAccounts
import FrontAccountsIndex from './../components/frontAccounts/Index'
import Users from './../components/frontAccounts/users/Users'
import Enterprise from './../components/frontAccounts/enterprise/Enterprise'
import Admittance from './../components/frontAccounts/admittance/Admittance'

//商品发布
import GoodsIndex from './../components/goods/Index'

import liftingWaterIndex from './../components/goods/liftingWater/Index'
import Release from './../components/goods/liftingWater/release/Index'
import ReleaseIndex from './../components/goods/liftingWater/release/pages/Index'
import ReleaseSetting from './../components/goods/liftingWater/release/pages/Setting'


import ReleaseInquiry from './../components/goods/liftingWater/releaseInquiry/Index'
import ReleaseInquiryIndex from './../components/goods/liftingWater/releaseInquiry/pages/Index'
import ReleaseInquiryUpdate from './../components/goods/liftingWater/releaseInquiry/pages/Update'
import ReleaseInquiryView from './../components/goods/liftingWater/releaseInquiry/pages/View'

import HistoryInquiry from './../components/goods/liftingWater/historyInquiry/Index'
import HistoryInquiryIndex from './../components/goods/liftingWater/historyInquiry/pages/Index'
import HistoryInquiryView from './../components/goods/liftingWater/historyInquiry/pages/View'


import Coal from './../components/goods/coal/Index'
import CoalIndex from './../components/goods/coal/pages/Index'
import CoalEditor from './../components/goods/coal/pages/Editor'
import CoalAdd from './../components/goods/coal/pages/Add'
import CoalSee from './../components/goods/coal/pages/See'
import CloudPurchase from './../components/goods/cloudPurchase/Index'
import CloudPurchaseIndex from './../components/goods/cloudPurchase/pages/Index'
import CloudPurchaseEditor from './../components/goods/cloudPurchase/pages/Editor'
import CloudPurchaseAdd from './../components/goods/cloudPurchase/pages/Add'
import CloudPurchaseSee from './../components/goods/cloudPurchase/pages/See'
import CloudSupply from './../components/goods/cloudSupply/Index'
import CloudSupplyIndex from './../components/goods/cloudSupply/pages/Index'
import CloudSupplyEditor from './../components/goods/cloudSupply/pages/Editor'
import CloudSupplyAdd from './../components/goods/cloudSupply/pages/Add'
import CloudSupplySee from './../components/goods/cloudSupply/pages/See'
import Price from './../components/goods/price/Index'
import Bidding from './../components/goods/bidding/Index'
import LockPrice from './../components/goods/lockPrice/Index'


//采购管理
import ProcurementIndex from './../components/procurement/Index'

import OrderIndex from './../components/procurement/order/Index'
import TotalOrder from './../components/procurement/order/totalOrder/Index'
import InviteBids from './../components/procurement/order/inviteBids/Index'
import PriceMonitor from './../components/procurement/order/priceMonitor/Index'

import SignManage from './../components/procurement/signManage/Index'

import WeighingIndex from './../components/procurement/weighing/Index'
import InboundInput from './../components/procurement/weighing/inboundInput/Index'
import InboundList from './../components/procurement/weighing/inboundList/Index'

import TestsIndex from './../components/procurement/tests/Index'
import TestsInput from './../components/procurement/tests/testsInput/Index'
import TestsList from './../components/procurement/tests/testsList/Index'

import RejectionIndex from './../components/procurement/rejection/Index'
import RejectionInput from './../components/procurement/rejection/rejectionInput/Index'
import RejectionList from './../components/procurement/rejection/rejectionList/Index'

import GoodsOwnershipIndex from './../components/procurement/goodsOwnership/Index'
import GoodsOwnershipInput from './../components/procurement/goodsOwnership/input/Index'
import GoodsOwnershipOrderList from './../components/procurement/goodsOwnership/orderList/Index'
import GoodsOwnershipBusinessList from './../components/procurement/goodsOwnership/businessList/Index'

import SettleManageIndex from './../components/procurement/settleManage/Index'
import SettleCreate from './../components/procurement/settleManage/settleCreate/Index'
import SettleList from './../components/procurement/settleManage/settleList/Index'


//款项管理
import MoneyIndex from './../components/money/Index'

import PaymentIndex from './../components/money/payment/Index'
import OrderPay from './../components/money/payment/orderPay/Index'
import CustomerPay from './../components/money/payment/customerPay/Index'

import Refunds from './../components/money/refunds/Index'
import OrderRefund from './../components/money/refunds/orderRefund/Index'
import CustomerRefund from './../components/money/refunds/customerRefund/Index'

import PartnersPayment from './../components/money/partnersPayment/Index'

import PartnersReceipts from './../components/money/partnersReceipts/Index'

import DepositManage from './../components/money/depositManage/Index'
import Dispose from './../components/money/depositManage/dispose/Index'
import DeductExpenses from './../components/money/depositManage/deductExpenses/Index'
import MarginCalls from './../components/money/depositManage/marginCalls/Index'

import PaymentBill from './../components/money/paymentBill/Index'

import Receivables from './../components/money/receivables/Index'

import AmortizeManage from './../components/money/amortizeManage/Index'
import EnterpriseCost from './../components/money/amortizeManage/enterpriseCost/Index'
import EnterpriseCostList from './../components/money/amortizeManage/enterpriseCostList/Index'
import BatchCost from './../components/money/amortizeManage/batchCost/Index'
import BatchCostList from './../components/money/amortizeManage/batchCostList/Index'

//发票管理
import InvoicesIndex from './../components/invoices/Index'

import IncomeIndex from './../components/invoices/income/Index'
import IncomeBusiness from './../components/invoices/income/business/Index'
import IncomeNonBusiness from './../components/invoices/income/nonBusiness/Index'
import IncomeNonBusinesslist from './../components/invoices/income/list/Index'


//基础设置
import BasicSettingIndex from './../components/basicSetting/Index'

import PlatformSettingIndex from './../components/basicSetting/platformSetting/Index'

import BaseInfoSetting from './../components/basicSetting/platformSetting/baseInfoSetting/Index'
import BusinessType from './../components/basicSetting/platformSetting/baseInfoSetting/businessType/Index'
import BusinessTypeList from './../components/basicSetting/platformSetting/baseInfoSetting/businessType/businessTypeList/Index'
import BusinessTypeAdd from './../components/basicSetting/platformSetting/baseInfoSetting/businessType/businessTypeList/Add'
import BusinessTypeBianji from './../components/basicSetting/platformSetting/baseInfoSetting/businessType/businessTypeList/Bianji'

import Standard from './../components/basicSetting/platformSetting/baseInfoSetting/standard/Index'
import Delivery from './../components/basicSetting/platformSetting/baseInfoSetting/delivery/Index'
import Ratio from './../components/basicSetting/platformSetting/baseInfoSetting/ratio/Index'

import CostType from './../components/basicSetting/platformSetting/baseInfoSetting/costType/Index'
import CostTypeAdd from './../components/basicSetting/platformSetting/baseInfoSetting/costType/Add'
import CostTypeView from './../components/basicSetting/platformSetting/baseInfoSetting/costType/View'


import PortCost from './../components/basicSetting/platformSetting/baseInfoSetting/portCost/Index'
import PortCostAdd from './../components/basicSetting/platformSetting/baseInfoSetting/portCost/Add'
import PortCostView from './../components/basicSetting/platformSetting/baseInfoSetting/portCost/View'

import ShippingCost from './../components/basicSetting/platformSetting/baseInfoSetting/shippingCost/Index'
import ShippingCostAdd from './../components/basicSetting/platformSetting/baseInfoSetting/shippingCost/Add'
import ShippingCostView from './../components/basicSetting/platformSetting/baseInfoSetting/shippingCost/View'

import TestsCost from './../components/basicSetting/platformSetting/baseInfoSetting/testsCost/Index'
import TestsCostAdd from './../components/basicSetting/platformSetting/baseInfoSetting/testsCost/Add'
import TestsCostView from './../components/basicSetting/platformSetting/baseInfoSetting/testsCost/View'

import OthersCost from './../components/basicSetting/platformSetting/baseInfoSetting/othersCost/Index'
import OthersCostAdd from './../components/basicSetting/platformSetting/baseInfoSetting/othersCost/Add'
import OthersCostView from './../components/basicSetting/platformSetting/baseInfoSetting/othersCost/View'

import OrderCost from './../components/basicSetting/platformSetting/baseInfoSetting/orderCost/Index'
import OrderCostAdd from './../components/basicSetting/platformSetting/baseInfoSetting/orderCost/Add'
import OrderCostView from './../components/basicSetting/platformSetting/baseInfoSetting/orderCost/View'

import CoalType from './../components/basicSetting/platformSetting/coalType/Index'
import CoalBrand from './../components/basicSetting/platformSetting/coalType/coalBrand/Index'
import CoalBrandIndex from './../components/basicSetting/platformSetting/coalType/coalBrand/pages/Index'
import CoalBrandEditor from './../components/basicSetting/platformSetting/coalType/coalBrand/pages/Editor'
import CoalBrandSee from './../components/basicSetting/platformSetting/coalType/coalBrand/pages/See'
import Category from './../components/basicSetting/platformSetting/coalType/category/Index'
import CategoryEditor from './../components/basicSetting/platformSetting/coalType/category/pages/Editor'
import CategoryIndex from './../components/basicSetting/platformSetting/coalType/category/pages/Index'
import CategoryValue from './../components/basicSetting/platformSetting/coalType/categoryValue/Index'
import CategoryValueIndex from './../components/basicSetting/platformSetting/coalType/categoryValue/pages/Index'
import CategoryValueEditor from './../components/basicSetting/platformSetting/coalType/categoryValue/pages/Editor'
import CategoryValueSee from './../components/basicSetting/platformSetting/coalType/categoryValue/pages/See'
import JydCoal from './../components/basicSetting/platformSetting/coalType/jydCoal/Index'
import JydCoalIndex from './../components/basicSetting/platformSetting/coalType/jydCoal/pages/Index.vue'
import JydCoalEditor from './../components/basicSetting/platformSetting/coalType/jydCoal/pages/Editor.vue'
import JydCoalAdd from './../components/basicSetting/platformSetting/coalType/jydCoal/pages/Add.vue'
import JydCoalSee from './../components/basicSetting/platformSetting/coalType/jydCoal/pages/See.vue'
import BrandRelease from './../components/basicSetting/platformSetting/coalType/brandRelease/Index'

import FeaturedFirst from './../components/basicSetting/platformSetting/featuredFirst/Index'
import CoalMall from './../components/basicSetting/platformSetting/featuredFirst/coalMall/Index'
import SupplyBidding from './../components/basicSetting/platformSetting/featuredFirst/supplyBidding/Index'

import WarehouseManage from './../components/basicSetting/platformSetting/warehouseManage/Index'
import WarehouseManageOperate from './../components/basicSetting/platformSetting/warehouseManage/operate/Index'
import WarehouseManageAdd from './../components/basicSetting/platformSetting/warehouseManage/operate/Add'
import WarehouseManageView from './../components/basicSetting/platformSetting/warehouseManage/operate/view'
import WarehouseManageUpdate from './../components/basicSetting/platformSetting/warehouseManage/operate/update'
import WarehouseManageSorting from './../components/basicSetting/platformSetting/warehouseManage/operate/Sorting'
import WarehouseManagePremium from './../components/basicSetting/platformSetting/warehouseManage/operate/Premium'

import ContractTemplate from './../components/basicSetting/platformSetting/contractTemplate/Index'
import ContractTemplateOperate from './../components/basicSetting/platformSetting/contractTemplate/operate/Index'
import ContractTemplateOperateAdd from './../components/basicSetting/platformSetting/contractTemplate/operate/Add'
import ContractTemplateOperateView from './../components/basicSetting/platformSetting/contractTemplate/operate/View'

import MessageSetting from './../components/basicSetting/platformSetting/messageSetting/Index'
import AppMsg from './../components/basicSetting/platformSetting/messageSetting/appMsg/Index'
import addAppMsg from './../components/basicSetting/platformSetting/messageSetting/appMsg/AddAppMsg'
import appMsgSee from './../components/basicSetting/platformSetting/messageSetting/appMsg/appMsgSee'

import ApprovalSetting from './../components/basicSetting/platformSetting/approvalSetting/Index'
import ProcessSetting from './../components/basicSetting/platformSetting/approvalSetting/processSetting/Index'
import ProcessView from './../components/basicSetting/platformSetting/approvalSetting/processView/Index'
  

import ContentCurationIndex from './../components/basicSetting/contentCuration/Index'

import Cms from './../components/basicSetting/contentCuration/cms/Index'

import OpenAndCloseIndex from './../components/basicSetting/contentCuration/openAndClose/Index'
import Trade from './../components/basicSetting/contentCuration/openAndClose/trade/Index'
import TradeSetting from './../components/basicSetting/contentCuration/openAndClose/trade/Setting'

import ValenceOfVertex from './../components/basicSetting/contentCuration/openAndClose/valenceOfVertex/Index'
import NoticeInfo from './../components/basicSetting/contentCuration/noticeInfo/Index'

import ECommerceIndex from './../components/basicSetting/contentCuration/eCommerce/Index'
import Pithead from './../components/basicSetting/contentCuration/eCommerce/pithead/Index'
import PitheadIndex from './../components/basicSetting/contentCuration/eCommerce/pithead/pages/Index'
import PitheadEditor from './../components/basicSetting/contentCuration/eCommerce/pithead/pages/Editor'
import PitheadSee from './../components/basicSetting/contentCuration/eCommerce/pithead/pages/See'
import Port from './../components/basicSetting/contentCuration/eCommerce/port/Index'
import CCIIndex from './../components/basicSetting/contentCuration/eCommerce/CCIIndex/Index'
import CCTDIndex from './../components/basicSetting/contentCuration/eCommerce/CCTDIndex/Index'
import BSPIIndex from './../components/basicSetting/contentCuration/eCommerce/BSPIIndex/Index'

import CarouselFigure from './../components/basicSetting/contentCuration/carouselFigure/Index'

import ActivityInfo from './../components/basicSetting/contentCuration/activityInfo/Index'

import AppIcons from './../components/basicSetting/contentCuration/appIcons/Index'


import AppBasicMaintenanceIndex from './../components/basicSetting/appBasicMaintenance/Index'
import AppScreen from './../components/basicSetting/appBasicMaintenance/appScreen/Index'
import AppVersion from './../components/basicSetting/appBasicMaintenance/appVersion/Index'


//sun
// import AppMessage from './../components/basicSetting/messageSetting/AppMessage'



//工作台
const workbench = {
	path: '/workbench',
	name: 'workbenchLink',
	component: WorkbenchIndex
} 

//统计
const statistics = {
	path: '/statistics',
	name: 'statisticsLink',
	component: StatisticsIndex,
	children: [
		{
			path: '/purchaseType',
			name: 'purchaseTypeLink',
			component: PurchaseType,
			children: [
				{      
					path: '/purchaseType/accounting',
					name: 'accountingLink',
					component: Accounting,
					children: [
						{      
							path: '/accounting/general',
							name: 'generalLedgerLink',
							component: GeneralLedger
						},
						{
							path: '/accounting/view',
							name: 'marginCallsViewLink',
							component: MarginCallsView
						}
					]
				},
				{
					path: '/purchaseType/assets',
					name: 'enterpriseAssetsLink',
					component: EnterpriseAssets
				},
				{
					path: '/purchaseType/order',
					name: 'orderAtatisticsLink',
					component: OrderAtatistics,
					children: [
						{      
							path: '/purchaseType/order/view',
							name: 'orderViewLink',
							component: OrderView
						},
						{
							path: '/purchaseType/order/typeView',
							name: 'orderTypeViewLink',
							component: OrderTypeView
						}
					]
				},
				{
					path: '/purchaseType/invoices',
					name: 'invoicesAtatisticsLink',
					component: InvoicesAtatistics,
					children: [
						{      
							path: '/purchaseType/invoices/entry',
							name: 'entryInvoiceLink',
							component: EntryInvoice
						},
						{
							path: '/purchaseType/invoices/settle',
							name: 'settleInvoiceLink',
							component: SettleInvoice
						}
					]
				}
			]
		},
		{      
			path: '/partnersAssets',
			name: 'partnersAssetsLink',
			component: PartnersAssets
		},
		{
			path: '/inventory',
			name: 'inventoryLink',
			component: Inventory,
			children: [
				{      
					path: '/inventory/ovewview',
					name: 'warehouseOverviewLink',
					component: WarehouseOverview
				},
				{
					path: '/inventory/query',
					name: 'warehouseQueryLink',
					component: WarehouseQuery
				},
				{
					path: '/inventory/riseAndLoss',
					name: 'riseAndLossLink',
					component: RiseAndLoss
				}
			]
		}
	]
} 

//后台账户管理
const backstageAccount = {
	path: '/backstage/account',
	name: 'backstageAccount',
	//redirect: '/backstageAccount/business',
	component: backstageAccountIndex,
	children: [
		{
			path: '/backstage/account',
			name: 'accountLink',
			component: Account
		}, 
		{
			path: '/backstage/addAccount',
			name: 'addAccountLink',
			component: AddAccount
		},
		{
			path: '/backstage/DeliveryChoice',
			name: 'DeliveryChoiceLink',
			component: DeliveryChoice
		},
		{
			path: '/backstage/editAccount',
			name: 'editAccountLink',
			component: EditAccount
		},
		{
			path: '/backstage/checkAccount',
			name: 'checkAccountLink',
			component: CheckAccount
		},
		{
			path: '/backstage/role',
			name: "role",
			component: Role
		},
		{
			path: '/backstage/addRole',
			name: "addRole",
			component: AddRole
		},
		{
			path: '/backstage/RoleAuthority',
			name: "roleAuthority",
			component: RoleAuthority,
		},
		{
			path: '/backstage/RoleAuthoritySee',
			name: "roleAuthoritySee",
			component: RoleAuthoritySee,
		},
		{
			path: '/backstage/warehouse',
			name: "warehousePowerLink",
			component: WarehousePower
		},
		{
			path: '/backstage/warehouse/view',
			name: "warehousePowerViewLink",
			component: WarehousePowerView
		},
		{
			path: '/backstage/warehouse/edit',
			name: "warehousePowerEditLink",
			component: WarehousePowerEdit
		},
		{
			path: '/backstage/business',
			name: 'businessLink',
			component: BusinessManageIndex,
			children: [
				{
					path: '/backstage/business/users',
					name: 'businessUserLink',
					component: BusinessManageUsersIndex,
					children: [
						{
							path: '/business/users/list',
							name: 'userslistLink',
							redirect:'/business/users/list/index',
							component: BusinessManageUsersList,
							children:[
								{
									path: '/business/users/list/index',
									name: 'BusinessManageUsersListIndex',
									component: BusinessManageUsersListIndex
								},{
                                    path: '/business/users/list/add',
                                    name: 'BusinessManageUsersListAdd',
                                    component: BusinessManageUsersListAdd
                                },{
									path: '/business/users/list/editor',
									name: 'BusinessManageUsersListEditor',
									component: BusinessManageUsersListEditor
								},{
									path: '/business/users/list/view',
									name: 'businessManageUsersListViewLink',
									component: BusinessManageUsersListView									
								}
							]
						},
						{
							path: '/business/users/attri',
							name: 'usersattriLink',
							redirect:'/business/users/attri/index',
							component: BusinessManageUsersAttri,
							children:[
								{
									path: '/business/users/attri/index',
									name: 'BusinessManageUsersAttriIndex',
									component: BusinessManageUsersAttriIndex
								},{
									path: '/business/users/attri/editor',
									name: 'BusinessManageUsersAttriEditor',
									component: BusinessManageUsersAttriEditor
								}
							]
						},
						{
							path: '/business/users/sign',
							name: 'userssignLink',
							redirect:'/business/users/sign/index',
							component: BusinessManageUsersSign,
							children:[
								{
									path: '/business/users/sign/index',
									name: 'BusinessManageUsersSignIndex',
									component: BusinessManageUsersSignIndex
								},{
									path: '/business/users/sign/editor',
									name: 'BusinessManageUsersSignEditor',
									component: BusinessManageUsersSignEditor
								},{
									path: '/business/users/sign/add',
									name: 'BusinessManageUsersSignAdd',
									component: BusinessManageUsersSignAdd
								}
							]
						},
						{
							path: '/business/users/bank',
							name: 'usersbankLink',
							redirect:'/business/users/bank/index',
							component: BusinessManageUsersBank,
							children:[
								{
									path: '/business/users/bank/index',
									name: 'BusinessManageUsersBankIndex',
									component: BusinessManageUsersBankIndex
								},{
									path: '/business/users/bank/editor',
									name: 'BusinessManageUsersBankEditor',
									component: BusinessManageUsersBankEditor
								},{
									path: '/business/users/bank/add',
									name: 'BusinessManageUsersBankAdd',
									component: BusinessManageUsersBankAdd
								}
							]
						},
						{
							path: '/business/users/invoices',
							name: 'usersinvoicesLink',
							redirect:'/business/users/invoices/index',
							component: BusinessManageUsersInvoices,
							children:[
								{
									path: '/business/users/invoices/index',
									name: 'BusinessManageUsersInvoicesIndex',
									component: BusinessManageUsersInvoicesIndex
								},{
									path: '/business/users/invoices/editorList',
									name: 'BusinessManageUsersInvoicesEditorList',
									component: BusinessManageUsersInvoicesEditorList
								},{
                                    path: '/business/users/invoices/add',
                                    name: 'BusinessManageUsersInvoicesAdd',
                                    component: BusinessManageUsersInvoicesAdd
                                },{
									path: '/business/users/invoices/editor',
									name: 'BusinessManageUsersInvoicesEditor',
									component: BusinessManageUsersInvoicesEditor
								}
							]
						},
						{
							path: '/business/users/admittance',
							name: 'usersadmittanceLink',
							component: BusinessManageUsersAdmittance,
							children: [
								{
									path: '/business/users/admittance/list',
									name: 'usersadmittanceListLink',
									component: BusinessManageUsersAdmittanceList
								},
								{
									path: '/business/users/admittance/updateList',
									name: 'usersadmittanceUpdateListLink',
									component: BusinessManageUsersAdmittanceUpdateList
								},
								{
									path: '/business/users/admittance/add',
									name: 'usersadmittanceAddLink',
									component: BusinessManageUsersAdmittanceAdd
								},
								{
									path: '/business/users/admittance/update',
									name: 'usersadmittanceUpdateLink',
									component: BusinessManageUsersAdmittanceUpdate
								},
								{
									path: '/business/users/admittance/update',
									name: 'usersadmittanceUpdateBeforeLink',
									component: BusinessManageUsersAdmittanceUpdateBefore
								}
							]
						},
						{
							path: '/business/users/inviteBids',
							name: 'usersinviteBidsLink',
                            redirect:'/business/users/InviteBids/index',
							component: BusinessManageUsersInviteBids,
                            children:[
                                {
                                    path: '/business/users/InviteBids/index',
                                    name: 'BusinessManageUsersInviteBidsIndex',
                                    component: BusinessManageUsersInviteBidsIndex
                                },{
                                    path: '/business/users/InviteBids/editor',
                                    name: 'BusinessManageUsersInviteBidsEditor',
                                    component: BusinessManageUsersInviteBidsEditor
                                }
                            ]
						},
						{
							path: '/business/users/incorrupt',
							name: 'usersincorruptLink',
							component: BusinessManageUsersIncorrupt,
						}
					]
				},
				{
					path: '/backstage/business/transport',
					name: 'transportLink',
					component: BusinessManageTransportIndex,
					children: [
						{
							path: '/business/transport/company',
							name: 'transportCompanyLink',
							component: BusinessManageTransportCompany,
						},
						{
							path: '/business/transport/company/Add',
							name: 'transportCompanyAdd',
							component: BusinessManageTransportCompanyAdd,
						},
						{
							path: '/business/transport/company/See',
							name: 'transportCompanySee',
							component: BusinessManageTransportCompanySee,
						},
						,
						{
							path: '/business/transport/company/Deal',
							name: 'transportCompanyDeal',
							component: BusinessManageTransportCompanyDeal,
						},
						{
							path: '/business/transport/bank',
							name: 'transportBankLink',
							component: BusinessManageTransportBank,
						},
						{
							path: '/business/transport/bank/See',
							name: 'transportBankSee',
							component: BusinessManageTransportBankSee,
						},
						{
							path: '/business/transport/bank/Add',
							name: 'transportBankAdd',
							component: BusinessManageTransportBankAdd,
						},
						{
							path: '/business/transport/bank/Bianji',
							name: 'transportBankBianji',
							component: BusinessManageTransportBankBianji,
						},
						{
							 path: '/business/transport/bank/Bianji2',
							 name: 'transportBankBianji2',
							 component: BusinessManageTransportBankBianji2,
						 }
						
					]
				},
				{
					path: '/backstage/business/ports',
					name: 'portsLink',
					component: BusinessManagePortsIndex,
					children: [
						{
							path: '/business/ports/company',
							name: 'portsCompanyLink',
							component: BusinessManagePortsCompany,
						},
						{
							path: '/business/ports/company/Add',
							name: 'portsCompanyAdd',
							component: BusinessManagePortsCompanyAdd,
						},
						{
							path: '/business/ports/company/See',
							name: 'portsCompanySee',
							component: BusinessManagePortsCompanySee,
						},
						,
						{
							path: '/business/ports/company/Deal',
							name: 'portsCompanyDeal',
							component: BusinessManagePortsCompanyDeal,
						},
						{
							path: '/business/ports/bank',
							name: 'portsBankLink',
							component: BusinessManagePortsBank,
						},
						{
							path: '/business/ports/bank/See',
							name: 'portsBankSee',
							component: BusinessManagePortsBankSee,
						},
						{
					 	    path: '/business/ports/bank/Add',
						 	name: 'portsBankAdd',
						 	component: BusinessManagePortsBankAdd,
						},
					    {
						 	path: '/business/ports/bank/Bianji',
						 	name: 'portsBankBianji',
						 	component: BusinessManagePortsBankBianji,
						 },
						 {
							  path: '/business/ports/bank/Bianji2',
							  name: 'portsBankBianji2',
							  component: BusinessManagePortsBankBianji2,
						  }
					]
				},
				{
					path: '/backstage/business/laboratory',
					name: 'laboratoryLink',
					component: BusinessManageLaboratoryIndex,
					children: [
						{
							path: '/business/laboratory/company',
							name: 'laboratoryCompanyLink',
							component: BusinessManageLaboratoryCompany,
						},
						{
							path: '/business/laboratory/company/Add',
							name: 'laboratoryCompanyAdd',
							component: BusinessManageLaboratoryCompanyAdd,
						},
						{
							path: '/business/laboratory/company/See',
							name: 'laboratoryCompanySee',
							component: BusinessManageLaboratoryCompanySee,
						},
						{
							path: '/business/laboratory/company/Deal',
							name: 'laboratoryCompanyDeal',
							component: BusinessManageLaboratoryCompanyDeal,
						},
						{
							path: '/business/laboratory/bank',
							name: 'laboratoryBankLink',
							component: BusinessManageLaboratoryBank,
						},
						{
							path: '/business/laboratory/bank/See',
							name: 'laboratoryBankSee',
							component: BusinessManageLaboratoryBankSee,
						},
						{
					 	    path: '/business/laboratory/bank/Add',
						 	name: 'laboratoryBankAdd',
						 	component: BusinessManageLaboratoryBankAdd,
						},
					    {
						 	path: '/business/laboratory/bank/Bianji',
						 	name: 'laboratoryBankBianji',
						 	component: BusinessManageLaboratoryBankBianji,
						 },
						 {
							  path: '/business/laboratory/bank/Bianji2',
							  name: 'laboratoryBankBianji2',
							  component: BusinessManageLaboratoryBankBianji2,
						  }
					]
				},
				{
					path: '/backstage/business/others',
					name: 'othersLink',
					component: BusinessManageOthersIndex,
					children: [
						{
							path: '/business/others/company',
							name: 'othersCompanyLink',
							component: BusinessManageOthersCompany,
						},
						{
							path: '/business/others/company/Add',
							name: 'othersCompanyAdd',
							component: BusinessManageOthersCompanyAdd,
						},
						{
							path: '/business/others/company/See',
							name: 'othersCompanySee',
							component: BusinessManageOthersCompanySee,
						},
						{
							path: '/business/others/company/Deal',
							name: 'othersCompanyDeal',
							component: BusinessManageOthersCompanyDeal,
						},
						{
							path: '/business/others/bank',
							name: 'othersBankLink',
							component: BusinessManageOthersBank,
						},
						{
							path: '/business/others/bank/See',
							name: 'othersBankSee',
							component: BusinessManageOthersBankSee,
						},
						{
					 	    path: '/business/others/bank/Add',
						 	name: 'othersBankAdd',
						 	component: BusinessManageOthersBankAdd,
						},
					    {
						 	path: '/business/others/bank/Bianji',
						 	name: 'othersBankBianji',
						 	component: BusinessManageOthersBankBianji,
						 },
						 {
							  path: '/business/others/bank/Bianji2',
							  name: 'othersBankBianji2',
							  component: BusinessManageOthersBankBianji2,
						  }
					]
				}
			]
		}

	]
}
//前台账户管理
const frontAccounts = {
	path: '/frontAccounts',
	name: 'frontAccountsLink',
	component: FrontAccountsIndex,
	children: [
		{
			path: '/frontAccounts/users',
			name: 'usersLink',
			component: Users
		},
		{
			path: '/frontAccounts/enterprise',
			name: 'enterpriseLink',
			component: Enterprise
		},
		{
			path: '/frontAccounts/admittance',
			name: 'admittanceLink',
			component: Admittance
		}
	]
}

//商品发布
const goods = {
	path: '/goods',
	name: 'goodsLink',
	component: GoodsIndex,
	children: [
		{
			path: '/goods/liftingWater',
			name: 'liftingWaterLink',
			component: liftingWaterIndex,
			children: [
				{      
					path: '/goods/release',
					name: 'releaseLink',
					component: Release,
					children: [
						{
							path: '/goods/release/index',
							name: 'releaseIndexLink',
							component: ReleaseIndex
						},
						{
							path: '/goods/release/setting',
							name: 'releaseSettingLink',
							component: ReleaseSetting
						}
					]
				},
				{
					path: '/goods/releaseInquiry',
					name: 'releaseInquiryLink',
					component: ReleaseInquiry,
					children: [
						{
							path: '/goods/releaseInquiry/index',
							name: 'releaseInquiryIndexLink',
							component: ReleaseInquiryIndex
						},
						{
							path: '/goods/releaseInquiry/update',
							name: 'releaseInquiryUpdateLink',
							component: ReleaseInquiryUpdate
						},
						{
							path: '/goods/releaseInquiry/view',
							name: 'releaseInquiryViewLink',
							component: ReleaseInquiryView
						}
					]	
				},
				{
					path: '/goods/historyInquiry',
					name: 'historyInquiryLink',
					component: HistoryInquiry,
					children: [
						{
							path: '/goods/historyInquiry/index',
							name: 'historyInquiryIndexLink',
							component: HistoryInquiryIndex
						},
						{
							path: '/goods/historyInquiry/view',
							name: 'historyInquiryViewLink',
							component: HistoryInquiryView
						}
					]	
				}
			]
		},
		{
			path: '/goods/coal',
			name: 'coalLink',
            redirect:"/goods/coal/index",
			component: Coal,
            children: [
                {      
                    path: '/goods/coal/index',
                    name: 'goodsCoalIndex',
                    component: CoalIndex
                },
                {
                    path: '/goods/coal/add',
                    name: 'goodsCoalAdd',
                    component: CoalAdd
                },
                {
                    path: '/goods/coal/editor',
                    name: 'goodsCoalEditor',
                    component: CoalEditor
                },
                {
                    path: '/goods/coal/see',
                    name: 'goodsCoalSee',
                    component: CoalSee
                }
            ]
		},
		{
			path: '/goods/cloudPurchase',
			name: 'cloudPurchaseLink',
            redirect:"/goods/cloudPurchase/index",
			component: CloudPurchase,
            children: [
                {      
                    path: '/goods/cloudPurchase/index',
                    name: 'goodsCloudPurchaseIndex',
                    component: CloudPurchaseIndex
                },
                {
                    path: '/goods/cloudPurchase/add',
                    name: 'goodsCloudPurchaseAdd',
                    component: CloudPurchaseAdd
                },
                {
                    path: '/goods/cloudPurchase/editor',
                    name: 'goodsCloudPurchaseEditor',
                    component: CloudPurchaseEditor
                },
                {
                    path: '/goods/cloudPurchase/see',
                    name: 'goodsCloudPurchaseSee',
                    component: CloudPurchaseSee
                }
            ]
		},
		{
			path: '/goods/cloudSupply',
			name: 'cloudSupplyLink',
            redirect:"/goods/cloudSupply/index",
			component: CloudSupply,
            children: [
                {      
                    path: '/goods/cloudSupply/index',
                    name: 'goodsCloudSupplyIndex',
                    component: CloudSupplyIndex
                },
                {
                    path: '/goods/cloudSupply/add',
                    name: 'goodsCloudSupplyAdd',
                    component: CloudSupplyAdd
                },
                {
                    path: '/goods/cloudSupply/editor',
                    name: 'goodsCloudSupplyEditor',
                    component: CloudSupplyEditor
                },
                {
                    path: '/goods/cloudSupply/see',
                    name: 'goodsCloudSupplySee',
                    component: CloudSupplySee
                }
            ]
		},
		{
			path: '/goods/price',
			name: 'priceLink',
			component: Price
		},
		{
			path: '/goods/bidding',
			name: 'biddingLink',
			component: Bidding
		},
		{
			path: '/goods/lockPrice',
			name: 'lockPriceLink',
			component: LockPrice
		}        
	]
} 

//采购管理
const procurement = {  
	path: '/procurement',
	name: 'procurementLink',
	component: ProcurementIndex,
	children: [
		{
			path: '/order',
			name: 'orderLink',
			component: OrderIndex,
			children: [
				{      
					path: '/order/totalOrder',
					name: 'totalOrderLink',
					component: TotalOrder
				},
				{
					path: '/order/inviteBids',
					name: 'inviteBidsLink',
					component: InviteBids
				},
				{
					path: '/order/priceMonitor',
					name: 'priceMonitorLink',
					component: PriceMonitor
				}
			]
		},
		{
			path: '/signManage',
			name: 'signManageLink',
			component: SignManage
		},
		{
			path: '/weighing',
			name: 'weighingLink',
			component: WeighingIndex,
			children: [
				{      
					path: '/weighing/input',
					name: 'inboundInputLink',
					component: InboundInput
				},
				{
					path: '/weighing/list',
					name: 'inboundListLink',
					component: InboundList
				}
			]
		},
		{
			path: '/tests',
			name: 'testsLink',
			component: TestsIndex,
			children: [
				{      
					path: '/tests/input',
					name: 'testsInputLink',
					component: TestsInput
				},
				{
					path: '/tests/list',
					name: 'estsListLink',
					component: TestsList
				}
			]
		},
		{
			path: '/rejection',
			name: 'rejectionLink',
			component: RejectionIndex,
			children: [
				{      
					path: '/rejection/input',
					name: 'rejectionInputLink',
					component: RejectionInput
				},
				{
					path: '/rejection/list',
					name: 'rejectionListLink',
					component: RejectionList
				}
			]
		},
		{
			path: '/ownership',
			name: 'ownershipLink',
			component: GoodsOwnershipIndex,
			children: [
				{      
					path: '/ownership/input',
					name: 'inputLink',
					component: GoodsOwnershipInput
				},
				{
					path: '/ownership/orderList',
					name: 'orderListLink',
					component: GoodsOwnershipOrderList
				},
				{
					path: '/ownership/businessList',
					name: 'goodsOwnershipBusinessListLink',
					component: GoodsOwnershipBusinessList
				}
			]
		},
		{
			path: '/settle',
			name: 'settleManageLink',
			component: SettleManageIndex,
			children: [
				{      
					path: '/settle/create',
					name: 'settleCreateLink',
					component: SettleCreate
				},
				{
					path: '/settle/list',
					name: 'settleListLink',
					component: SettleList
				}
			]
		}

	]
} 

//款项管理
const payment = {
	path: '/money',
	name: 'moneyLink',
	component: MoneyIndex,
	children: [
		{
			path: '/payment',
			name: 'paymentLink',
			component: PaymentIndex,
			children: [
				{      
					path: '/payment/orderPay',
					name: 'orderPayLink',
					component: OrderPay
				},
				{
					path: '/payment/customerPay',
					name: 'customerPayLink',
					component: CustomerPay
				}
			]
		},
		{
			path: '/refunds',
			name: 'refundsLink',
			component: Refunds,
			children: [
				{      
					path: '/refunds/orderRefund',
					name: 'orderRefundLink',
					component: OrderRefund
				},
				{
					path: '/refunds/customerRefund',
					name: 'customerRefundLink',
					component: CustomerRefund
				}
			]
		},
		{
			path: '/partnersPayment',
			name: 'partnersPaymentLink',
			component: PartnersPayment
		},
		{
			path: '/partnersReceipts',
			name: 'partnersReceiptsLink',
			component: PartnersReceipts
		},
		{
			path: '/deposit',
			name: 'depositLink',
			component: DepositManage,
			children: [
				{      
					path: '/deposit/dispose',
					name: 'disposeLink',
					component: Dispose
				},
				{
					path: '/deposit/deductExpenses',
					name: 'deductExpensesLink',
					component: DeductExpenses
				},
				{
					path: '/deposit/marginCalls',
					name: 'marginCallsLink',
					component: MarginCalls
				}
			]
		},
		{
			path: '/paymentBill',
			name: 'paymentBillLink',
			component: PaymentBill
		},
		{
			path: '/receivables',
			name: 'receivablesLink',
			component: Receivables
		},
		{
			path: '/amortize',
			name: 'amortizeLink',
			component: AmortizeManage,
			children: [
				{      
					path: '/amortize/enterprise',
					name: 'enterpriseCostLink',
					component: EnterpriseCost
				},
				{
					path: '/amortize/enterpriseList',
					name: 'enterpriseCostListLink',
					component: EnterpriseCostList
				},
				{
					path: '/amortize/batch',
					name: 'batchCostLink',
					component: BatchCost
				},
				{
					path: '/amortize/batchList',
					name: 'batchCostListLink',
					component: BatchCostList
				}

			]
		}
	]
} 

//发票管理
const invoices = {
	path: '/invoices',
	name: 'invoicesLink',
	component: InvoicesIndex,
	children: [
		{
			path: '/income',
			name: 'incomeLink',
			component: IncomeIndex,
			children: [
				{      
					path: '/income/business',
					name: 'incomeBusinessLink',
					component: IncomeBusiness
				},
				{
					path: '/income/nonBusiness',
					name: 'nonBusinessLink',
					component: IncomeNonBusiness
				},
				{
					path: '/income/list',
					name: 'incomeNonBusinesslistLink',
					component: IncomeNonBusinesslist
				}
			]
		}
	]
} 
//基础设置
const basicSetting = {
	path: '/basicSetting',
	name: 'basicSettingLink',
	component: BasicSettingIndex,
	children: [
		{
			path: '/platform',
			name: 'platformSettingLink',
			component: PlatformSettingIndex,
			children: [
				{      
					path: '/platform/baseInfo',
					name: 'baseInfoLink',
					component: BaseInfoSetting,
					children: [
						{      
							path: '/platform/baseInfo/businessType',
							name: 'businessTypeLink',
							component: BusinessType,
							children:[
								{
									path: '/platform/baseInfo/businessType/Index',
									name: 'BusinessTypeList',
									component: BusinessTypeList,
								},
								{
									path: '/platform/baseInfo/businessType/Add',
									name: 'BusinessTypeAdd',
									component: BusinessTypeAdd,
								},
								{
									path: '/platform/baseInfo/businessType/Bianji',
									name: 'BusinessTypeBianji',
									component: BusinessTypeBianji,
								}
							]
						},
						{
							path: '/platform/baseInfo/standard',
							name: 'standardLink',
							component: Standard
						},
						{
							path: '/platform/baseInfo/delivery',
							name: 'deliveryLink',
							component: Delivery
						},
						{
							path: '/platform/baseInfo/ratio',
							name: 'ratioLink',
							component: Ratio
						},
						{									
							path: '/platform/baseInfo/costType',
							name: 'costTypeLink',
							component: CostType
						},
						{
							path: '/platform/baseInfo/costType/add',
							name: 'costTypeAddLink',
							component:  CostTypeAdd
						},
						{
							path: '/platform/baseInfo/costType/view/:id',
							name: 'costTypeViewLink',
							component:  CostTypeView
						},
						{
							path: '/platform/baseInfo/portCost',
							name: 'sortCostLink',
							component: PortCost
						},
						{
							path: '/platform/baseInfo/portCost/add',
							name: 'sortCostAddLink',
							component:  PortCostAdd
						},
						{
							path: '/platform/baseInfo/portCost/view/:id',
							name: 'sortCostViewLink',
							component:  PortCostView
						},
						{
							path: '/platform/baseInfo/shippingCost',
							name: 'shippingCostLink',
							component: ShippingCost
						},
						{
							path: '/platform/baseInfo/shippingCost/add',
							name: 'shippingCostAddLink',
							component:  ShippingCostAdd
						},
						{
							path: '/platform/baseInfo/shippingCost/view/:id',
							name: 'shippingCostViewLink',
							component:  ShippingCostView
						},
						{
							path: '/platform/baseInfo/testsCost',
							name: 'testsCostLink',
							component: TestsCost
						},
						{
							path: '/platform/baseInfo/testsCost/add',
							name: 'testsCostAddLink',
							component:  TestsCostAdd
						},
						{
							path: '/platform/baseInfo/testsCost/view/:id',
							name: 'testsCostViewLink',
							component:  TestsCostView
						},
						{
							path: '/platform/baseInfo/othersCost',
							name: 'othersCostLink',
							component: OthersCost
						},
						{
							path: '/platform/baseInfo/othersCost/add',
							name: 'othersCostAddLink',
							component:  OthersCostAdd
						},
						{
							path: '/platform/baseInfo/othersCost/view/:id',
							name: 'othersCostViewLink',
							component:  OthersCostView
						},
						{
							path: '/platform/baseInfo/orderCost',
							name: 'orderCostLink',
							component: OrderCost
						},
						{
							path: '/platform/baseInfo/orderCost/add',
							name: 'orderCostAddLink',
							component:  OrderCostAdd
						},
						{
							path: '/platform/baseInfo/orderCost/view/:id',
							name: 'orderCostViewLink',
							component:  OrderCostView
						},
					]
				},                  
				{
					path: '/platform/coalType',
					name: 'coalTypeLink',
					component: CoalType,
					children: [
						{
							path: '/platform/coalType/coalBrand',
							name: 'coalBrandLink',
                            redirect:'/platform/coalType/coalBrand/index',
							component: CoalBrand,
                            children:[
                                {
                                    path: '/platform/coalType/coalBrand/index',
                                    name: 'platformCoalTypeCoalBrandIndex',
                                    component: CoalBrandIndex,
                                },{
                                    path: '/platform/coalType/coalBrand/editor',
                                    name: 'platformCoalTypeCoalBrandEditor',
                                    component: CoalBrandEditor,
                                },{
                                    path: '/platform/coalType/coalBrand/see',
                                    name: 'platformCoalTypeCoalBrandSee',
                                    component: CoalBrandSee,
                                }
                            ]
						},
						{
							path: '/platform/coalType/category',
							name: 'categoryLink',
                            redirect:'/platform/coalType/category/index',
							component: Category,
                            children:[
                                {
                                    path: '/platform/coalType/category/index',
                                    name: 'platformCoalTypeCategoryIndex',
                                    component: CategoryIndex,
                                },{
                                    path: '/platform/coalType/category/editor',
                                    name: 'platformCoalTypeCategoryEditor',
                                    component: CategoryEditor,
                                }
                            ]
						},
						{
							path: '/platform/coalType/categoryValue',
							name: 'categoryValueLink',
                            redirect:'/platform/coalType/categoryValue/index',
							component: CategoryValue,
                            children:[
                                {
                                    path: '/platform/coalType/categoryValue/index',
                                    name: 'platformCoalTypeCategoryValueIndex',
                                    component: CategoryValueIndex,
                                },{
                                    path: '/platform/coalType/categoryValue/editor',
                                    name: 'platformCoalTypeCategoryValueEditor',
                                    component: CategoryValueEditor,
                                },{
                                    path: '/platform/coalType/categoryValue/see',
                                    name: 'platformCoalTypeCategoryValueSee',
                                    component: CategoryValueSee,
                                }
                            ]
						},
						{
							path: '/platform/coalType/jydCoal',
							name: 'jydCoalLink',
                            redirect:'/platform/coalType/jydCoal/index',
							component: JydCoal,
                            children:[
                                {
                                    path: '/platform/coalType/jydCoal/index',
                                    name: 'platformCoalTypejydCoalIndex',
                                    component: JydCoalIndex,
                                },{
                                    path: '/platform/coalType/jydCoal/editor',
                                    name: 'platformCoalTypejydCoalEditor',
                                    component: JydCoalEditor,
                                },{
                                    path: '/platform/coalType/jydCoal/see',
                                    name: 'platformCoalTypejydCoalSee',
                                    component: JydCoalSee,
                                },{
                                    path: '/platform/coalType/jydCoal/add',
                                    name: 'platformCoalTypejydCoalAdd',
                                    component: JydCoalAdd,
                                }
                            ]
						},
						{
							path: '/platform/coalType/brandRelease',
							name: 'brandReleaseLink',
							component: BrandRelease,
						}
					]
				},        
				{
					path: '/platform/featuredFirst',
					name: 'featuredFirstLink',
					component: FeaturedFirst,
					children: [
						{
							path: '/platform/featuredFirst/coalMall',
							name: 'coalMallLink',
							component: CoalMall
						},
						{
							path: '/platform/featuredFirst/supplyBidding',
							name: 'supplyBiddingLink',
							component: SupplyBidding
						}
					]
				},        
				{
					path: '/platform/warehouse',
					name: 'warehouseLink',
					component: WarehouseManage,
					children: [
						{
							path: '/platform/warehouse/operate',
							name: 'warehouseOperateLink',
							component: WarehouseManageOperate
						},
						{
							path: '/platform/warehouse/add',
							name: 'warehouseManageAddLink',
							component: WarehouseManageAdd
						},
						{
							path: '/platform/warehouse/view/:id',
							name: 'warehouseManageViewLink',
							component: WarehouseManageView
						},
						{
							path: '/platform/warehouse/update/:id',
							name: 'warehouseManageUpdateLink',
							component: WarehouseManageUpdate
						},
						{
							path: '/platform/warehouse/sort',
							name: 'warehouseManageSortingLink',
							component: WarehouseManageSorting
						},
						{
							path: '/platform/warehouse/premium',
							name: 'warehouseManagePremiumLink',
							component: WarehouseManagePremium
						}
					]
				},        
				{
					path: '/platform/contract',
					name: 'contractLink',
					component: ContractTemplate,
					children: [
						{
							path: '/platform/contract/operate',
							name: 'contractOperateLink',
							component: ContractTemplateOperate
						},
						{
							path: '/platform/contract/add',
							name: 'contractOperateAddLink',
							component: ContractTemplateOperateAdd
						},
						{
							path: '/platform/contract/view/:id',
							name: 'contractOperateViewLink',
							component: ContractTemplateOperateView
						}
					]
				},        
				{
					path: '/platform/message',
					name: 'messageLink',
					redirect:'/platform/message/appMsg',
					component: MessageSetting,
					children: [
						{
							path: '/platform/message/appMsg',
							name: 'appMsgLink',
							component: AppMsg
						},
						{
							path: '/platform/message/addAppMsg',
							name: 'addAppMsg',
							component: addAppMsg
						},
						{
							path: '/platform/message/appMsgSee',
							name: 'appMsgSee',
							component: appMsgSee
						}
					]
				},        
				{
					path: '/platform/approval',
					name: 'approvalLink',
					component: ApprovalSetting,
					children: [
						{
							path: '/platform/approval/setting',
							name: 'asettingLink',
							component: ProcessSetting
						},
						{
							path: '/platform/approval/view',
							name: 'viewLink',
							component: ProcessSetting
						}
					]
				}
			]
		},
		{
			path: '/content',
			name: 'contentCurationLink',
			component: ContentCurationIndex,
			children: [
				{      
					path: '/content/cms',
					name: 'cmsLink',
					component: Cms
				},
				{
					path: '/content/openAndClose',
					name: 'openAndCloseLink',
					component: OpenAndCloseIndex,
					children: [
						{
							path: '/content/trade',
							name: 'tradeLink',
							component: Trade
						},
						{
							path: '/content/tradeSetting',
							name: 'tradeSettingLink',
							component: TradeSetting
						},
						{
							path: '/content/valenceOfVertex',
							name: 'valenceOfVertexLink',
							component: ValenceOfVertex
						}
					]
				},
				{
					path: '/content/noticeInfo',
					name: 'noticeInfoLink',
					component: NoticeInfo
				},
				{
					path: '/content/eCommerce',
					name: 'eCommerceLink',
					component: ECommerceIndex,
					children: [
						{
							path: '/content/eCommerce/pithead',
							name: 'pitheadLink',
                            redirect:'/content/eCommerce/pithead/index',
							component: Pithead,
                            children: [
                                {
                                    path: '/content/eCommerce/pithead/index',
                                    name: 'eCommercePitheadIndex',
                                    component: PitheadIndex
                                },
                                {
                                    path: '/content/eCommerce/pithead/editor',
                                    name: 'eCommercePitheadEditor',
                                    component: PitheadEditor
                                },
                                {
                                    path: '/content/eCommerce/pithead/see',
                                    name: 'eCommercePitheadSee',
                                    component: PitheadSee
                                }
                            ]
						},
						{
							path: '/content/eCommerce/port',
							name: 'portLink',
							component: Port
						},
						{
							path: '/content/eCommerce/CCIIndex',
							name: 'CCIIndexLink',
							component: CCIIndex
						},
						{
							path: '/content/eCommerce/CCTDIndex',
							name: 'CCTDIndexLink',
							component: CCTDIndex
						},
						{
							path: '/content/eCommerce/BSPIIndex',
							name: 'BSPIIndexLink',
							component: BSPIIndex
						}
					]
				},
				{
					path: '/content/carouselFigure',
					name: 'carouselFigureLink',
					component: CarouselFigure
				},
				{
					path: '/content/activityInfo',
					name: 'activityInfoLink',
					component: ActivityInfo
				},
				{
					path: '/content/appIcons',
					name: 'appIconsLink',
					component: AppIcons
				}
			]
		},
		{
			path: '/appBasic',
			name: 'appBasicMaintenanceLink',
			component: AppBasicMaintenanceIndex,
			children: [
				{      
					path: '/appBasic/appScreen',
					name: 'appScreenLink',
					component: AppScreen
				},
				{
					path: '/appBasic/appVersion',
					name: 'appVersionLink',
					component: AppVersion
				}
			]
		}
	]
} 

   
const test = {
	path: '/test',
	name: 'testLink',
	component: Test
}


const routes = [
	{
		path: '/',
		name: 'loginLink',
		component: Login
    },
	{
		path: '/home',
		name: 'homeLink',
		component: Home,
		children: [
			workbench,
			statistics,
			backstageAccount,
			frontAccounts,
			goods,
			procurement,
			payment,
			invoices,
			basicSetting,
			test			
		]
    },
    
]


export default new Router({
  mode: 'history',
  routes
})
