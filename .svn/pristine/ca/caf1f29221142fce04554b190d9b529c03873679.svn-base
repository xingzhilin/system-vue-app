/**
 * [请求的数据]
 * @level  导航级别
 * @isExpanded 设置为展开
 * @isSelected 设置选中高亮
 * @type === 'button'// 导航菜单为按钮
 * @type === 'link'// 导航菜单为连接 直接跳转页面
 */
let menus = [
    {
        id: 1,
        level: 1,
        name: '工作台',
        type: "link",
        url: "/workbench"
    },
    {
        id: 22,
        level: 1,
        name: '统计',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 221,
                level: 2,
                name: '账号管理',
                type: "link",
                url: "/statistics"
            }
        ]
    },
    {
        id: 2,
        level: 1,
        name: '后台账户管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 31,
                level: 2,
                name: '账号管理',
                type: "link",
                url: "/backstage/account"
            },
            {
                id: 311,
                level: 2,
                name: '角色管理',
                type: "link",
                url: "/backstage/role"
            },
            {
                id: 312,
                level: 2,
                name: '交割库权限设置',
                type: "link",
                url: "/backstage/warehouse"
            }
        ]
    },
    {
        id: 6,
        level: 1,
        name: '前台账户管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 61,
                level: 2,
                name: '用户',
                type: "link",
                url: "/frontAccounts/users"
            },
            {
                id: 62,
                level: 2,
                name: '企业',
                type: "link",
                url: "/frontAccounts/enterprise"
            },
            {
                id: 63,
                level: 2,
                name: '准入',
                type: "link",
                url: "/frontAccounts/admittance"
            }
        ]
    },
    {
        id: 7,
        level: 1,
        name: '商品发布管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 71,
                level: 2,
                name: '升贴水',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 711,
                        level: 3,
                        name: '发布',
                        type: "link",
                        url: "/goods/release"
                    },
                    {
                        id: 712,
                        level: 3,
                        name: '发布查询',
                        type: "link",
                        url: "/goods/releaseInquiry"
                    },
                    {
                        id: 713,
                        level: 3,
                        name: '历史查询',
                        type: "link",
                        url: "/goods/historyInquiry"
                    }
                ]
            },
            {
                id: 72,
                level: 2,
                name: '煤炭',
                type: "link",
                url: "/goods/coal"
            },
            {
                id: 73,
                level: 2,
                name: '云采购',
                type: "link",
                url: "/goods/cloudPurchase"
            },
            {
                id: 74,
                level: 2,
                name: '云供应',
                type: "link",
                url: "/goods/cloudSupply"
            },
            {
                id: 75,
                level: 2,
                name: '定价',
                type: "link",
                url: "/goods/price"
            },
            {
                id: 76,
                level: 2,
                name: '竞价',
                type: "link",
                url: "/goods/bidding"
            },
            {
                id: 77,
                level: 2,
                name: '锁价',
                type: "link",
                url: "/goods/lockPrice"
            }
        ]
    },
    {
        id: 8,
        level: 1,
        name: '采购端管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 81,
                level: 2,
                name: '订单',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 811,
                        level: 3,
                        name: '总订单',
                        type: "link",
                        url: "/order/totalOrder"
                    },
                    {
                        id: 812,
                        level: 3,
                        name: '招标订单',
                        type: "link",
                        url: "/order/inviteBids"
                    },
                    {
                        id: 813,
                        level: 3,
                        name: '货价监控',
                        type: "link",
                        url: "/order/priceMonitor"
                    }
                ]
            },
            {
                id: 82,
                level: 2,
                name: '签章',
                type: "link",
                url: "/signManage"
            },
            {
                id: 83,
                level: 2,
                name: '称重',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 831,
                        level: 3,
                        name: '录入',
                        type: "link",
                        url: "/weighing/input"
                    },
                    {
                        id: 832,
                        level: 3,
                        name: '列表',
                        type: "link",
                        url: "/weighing/list"
                    }
                ]
            },
            {
                id: 84,
                level: 2,
                name: '化验',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 841,
                        level: 3,
                        name: '录入',
                        type: "link",
                        url: "/tests/input"
                    },
                    {
                        id: 842,
                        level: 3,
                        name: '列表',
                        type: "link",
                        url: "/tests/list"
                    }
                ]
            },
            {
                id: 85,
                level: 2,
                name: '拒收',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 851,
                        level: 3,
                        name: '录入',
                        type: "link",
                        url: "/rejection/input"
                    },
                    {
                        id: 852,
                        level: 3,
                        name: '列表',
                        type: "link",
                        url: "/rejection/list"
                    }
                ]
            },
            {
                id: 86,
                level: 2,
                name: '货权',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 861,
                        level: 3,
                        name: '录入',
                        type: "link",
                        url: "/ownership/input"
                    },
                    {
                        id: 862,
                        level: 3,
                        name: '列表',
                        type: "link",
                        url: "/ownership/orderList"
                    },
                    {
                        id: 863,
                        level: 3,
                        name: '列表',
                        type: "link",
                        url: "/ownership/businessList"
                    }
                ]
            },
            {
                id: 87,
                level: 2,
                name: '结算单',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 871,
                        level: 3,
                        name: '生成结算单',
                        type: "link",
                        url: "/settle/create"
                    },
                    {
                        id: 872,
                        level: 3,
                        name: '结算单列表',
                        type: "link",
                        url: "/settle/list"
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        level: 1,
        name: '款项管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 91,
                level: 2,
                name: '付款',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 911,
                        level: 3,
                        name: '订单',
                        type: "link",
                        url: "/payment/orderPay"
                    },
                    {
                        id: 912,
                        level: 3,
                        name: '客户企业',
                        type: "link",
                        url: "/payment/customerPay"
                    }
                ]
            },
            {
                id: 92,
                level: 2,
                name: '收退款',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 921,
                        level: 3,
                        name: '订单',
                        type: "link",
                        url: "/refunds/orderRefund"
                    },
                    {
                        id: 922,
                        level: 3,
                        name: '客户企业',
                        type: "link",
                        url: "/refunds/customerRefund"
                    }
                ]
            },
            {
                id: 93,
                level: 2,
                name: '合作方付款',
                type: "link",
                url: "/partnersPayment"
            },
            {
                id: 94,
                level: 2,
                name: '合作方收款',
                type: "link",
                url: "/partnersReceipts"
            },
            {
                id: 95,
                level: 2,
                name: '采购端保证金管理',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 951,
                        level: 3,
                        name: '保证金处理',
                        type: "link",
                        url: "/deposit/dispose"
                    },
                    {
                        id: 952,
                        level: 3,
                        name: '列表',
                        type: "link",
                        url: "/deposit/deductExpenses"
                    },
                    {
                        id: 953,
                        level: 3,
                        name: '保证金补缴通知',
                        type: "link",
                        url: "/deposit/marginCalls"
                    }
                ]
            },
            {
                id: 96,
                level: 2,
                name: '付款单',
                type: "link",
                url: "/paymentBill"
            },
            {
                id: 97,
                level: 2,
                name: '收款单',
                type: "link",
                url: "/receivables"
            },
            {
                id: 98,
                level: 2,
                name: '费用摊销',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 981,
                        level: 3,
                        name: '费用摊销',
                        type: "link",
                        url: "/amortize/expensesControl"
                    },
                    {
                        id: 982,
                        level: 3,
                        name: '费用摊销列表',
                        type: "link",
                        url: "/amortize/list"
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        level: 1,
        name: '发票管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 101,
                level: 2,
                name: '进项发票',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 1011,
                        level: 3,
                        name: '业务类',
                        type: "link",
                        url: "/income/business"
                    },
                    {
                        id: 1012,
                        level: 3,
                        name: '非业务类',
                        type: "link",
                        url: "/income/nonBusiness"
                    },
                    {
                        id: 1013,
                        level: 3,
                        name: '进项发票认票列表',
                        type: "link",
                        url: "/income/list"
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        level: 1,
        name: '基础设置',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 11,
                level: 1,
                name: '交割库管理',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 111,
                        level: 2,
                        name: '交割库维护',
                        type: "link",
                        url: "/platform/warehouse/operate"
                    }
                ]
            },
            {
                id: 12,
                level: 2,
                name: '交割库管理',
                type: "link",
                url: "/platform/warehouse/operate"
            }
        ]
    },
    {
        id: 3,
        level: 1,
        name: '后台账户管理',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 31,
                level: 2,
                name: '账号管理',
                type: "link",
                url: "/backstage/account"
            },
            {
                id: 311,
                level: 2,
                name: '角色管理',
                type: "link",
                url: "/backstage/role"
            },
            {
                id: 32,
                level: 2,
                name: '企业用户',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 321,
                        level: 3,
                        name: '用户管理',
                        type: "link",
                        url: "/detail/displaying-data",
                        isExpanded: false,
                        isSelected: false,
                        subMenu: {
                            id: 3221,
                            level: 4,
                            name: '发票管理',
                            type: "link",
                            url: "/detail/template-syntax"
                        }
                    },
                    {
                        id: 322,
                        level: 3,
                        name: '模板语法',
                        type: "link",
                        url: "/detail/template-syntax"
                    },
                    {
                        id: 323,
                        level: 3,
                        name: '生命周期钩子',
                        type: "link",
                        url: "/detail/lifecycle-hooks"
                    },
                    {
                        id: 324,
                        level: 3,
                        name: '组件交互',
                        type: "link",
                        url: "/detail/component-interaction"
                    },
                    {
                        id: 325,
                        level: 3,
                        name: '组件样式',
                        type: "link",
                        url: "/detail/component-styles"
                    },
                    {
                        id: 326,
                        level: 3,
                        name: '动态组件',
                        type: "link",
                        url: "/detail/dynamic-component-loader"
                    },
                    {
                        id: 327,
                        level: 3,
                        name: '属性型指令',
                        type: "link",
                        url: "/detail/attribute-directives"
                    },
                    {
                        id: 328,
                        level: 3,
                        name: '结构型指令',
                        type: "link",
                        url: "/detail/structural-directives"
                    },
                    {
                        id: 329,
                        level: 3,
                        name: '管道',
                        type: "link",
                        url: "/detail/pipes"
                    },
                    {
                        id: 3210,
                        level: 3,
                        name: '动画',
                        type: "link",
                        url: "/detail/animations"
                    },
                    
                ]
            },
            {
                id: 33,
                level: 2,
                name: '表单',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        name: '用户输入',
                        type: "link",
                        url: "/detail/user-input"
                    },
                    {
                        name: '模板驱动表单',
                        type: "link",
                        url: "/detail/forms"
                    },
                    {
                        name: '表单验证',
                        type: "link",
                        url: "/detail/form-validation"
                    },
                    {
                        name: '响应式表单',
                        type: "link",
                        url: "/detail/reactive-forms"
                    },
                    {
                        name: '动态表单',
                        type: "link",
                        url: "/detail/dynamic-form"
                    }
                ]
            },
            {
                id: 34,
                level: 2,
                name: '引用启动',
                type: "link",
                url: "/detail/bootstrapping"
            },
            {
                id: 35,
                level: 2,
                name: 'NgModules',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 341,
                        level: 3,
                        name: 'NgModule',
                        type: "link",
                        url: "/detail/ngmodule"
                    },
                    {
                        id: 342,
                        level: 3,
                        name: 'NgModule常见问题',
                        type: "link",
                        url: "/detail/ngmodule-faq"
                    }
                ]
            },
            {
                id: 36,
                level: 2,
                name: '依赖注入',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 361,
                        level: 3,
                        name: '依赖注入',
                        type: "link",
                        url: "/detail/dependency-injection"
                    },
                    {
                        id: 362,
                        level: 3,
                        name: '多级注入器',
                        type: "link",
                        url: "/detail/hierarchical-dependency-injection"
                    },
                    {
                        id: 363,
                        level: 3,
                        name: 'DI实例技巧',
                        type: "link",
                        url: "/detail/dependency-injection-in-action"
                    }
                ]
            },
            {
                id: 37,
                level: 2,
                name: 'HttpClient',
                type: "link",
                url: "/detail/http"
            },
            {
                id: 38,
                level: 2,
                name: '路由与导航',
                type: "link",
                url: "/detail/router"
            },
            {
                id: 39,
                level: 2,
                name: '测试',
                type: "link",
                url: "/detail/testing"
            },
            {
                id: 310,
                level: 2,
                name: '速查表',
                type: "link",
                url: "/detail/cheatsheet"
            },
            
        ]
    },
    {
        id: 4,
        level: 1,
        name: '其它技术',
        type: "button",
        isExpanded: false,
        isSelected: false,
        subMenu: [
            {
                id: 41,
                level: 2,
                name: '国际化（i18n）',
                type: "link",
                url: "/detail/i18n"
            },
            {
                id: 42,
                level: 2,
                name: '语言服务',
                type: "link",
                url: "/detail/language-service"
            },
            {
                id: 43,
                level: 2,
                name: '安全',
                type: "link",
                url: "/detail/security"
            },
            {
                id: 44,
                level: 2,
                name: '环境设置与部署',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 441,
                        level: 3,
                        name: '搭建本地开发环境',
                        type: "link",
                        url: "/detail/setup"
                    },
                    {
                        id: 442,
                        level: 3,
                        name: '搭建方式剖析',
                        type: "link",
                        url: "/detail/setup-systemjs-anatomy"
                    },
                    {
                        id: 443,
                        level: 3,
                        name: '浏览器支持',
                        type: "link",
                        url: "/detail/browser-support"
                    },
                    {
                        id: 444,
                        level: 3,
                        name: 'npm包',
                        type: "link",
                        url: "/detail/npm-packages"
                    },
                    {
                        id: 445,
                        level: 3,
                        name: 'TypeScript配置',
                        type: "link",
                        url: "/detail/typescript-configuration"
                    },
                    {
                        id: 446,
                        level: 3,
                        name: '预(AoT)编译器',
                        type: "link",
                        url: "/detail/aot-compiler"
                    },
                    {
                        id: 447,
                        level: 3,
                        name: '预(AoT)编译器',
                        type: "link",
                        url: "/detail/metadata"
                    },
                    {
                        id: 448,
                        level: 3,
                        name: '部署',
                        type: "link",
                        url: "/detail/deployment"
                    }
                ]
            },
            {
                id: 45,
                level: 2,
                name: '升级',
                type: "button",
                isExpanded: false,
                isSelected: false,
                subMenu: [
                    {
                        id: 451,
                        level: 3,
                        name: '从AngularJS升级',
                        type: "link",
                        url: "/detail/upgrade"
                    },
                    {
                        id: 452,
                        level: 3,
                        name: '升级速查表',
                        type: "link",
                        url: "/detail/ajs-quick-reference"
                    }
                ]
            },
            {
                id: 46,
                level: 2,
                name: 'VisualStudio2015快速上手',
                type: "link",
                url: "/detail/visual-studio-2015"
            },
            {
                id: 47,
                level: 2,
                name: '风格指南',
                type: "link",
                url: "/detail/styleguide"
            },
            {
                id: 48,
                level: 2,
                name: '词汇表',
                type: "link",
                url: "/detail/glossary"
            }
        ]
    },
    {
        id: 5,
        level: 1,
        name: 'API参考手册',
        type: "link",
        url: "/detail/api"
    }
]



const state = {
  menus
}

export {
  state
}