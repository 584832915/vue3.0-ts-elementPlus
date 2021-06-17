module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    moment: true,
    echarts:true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "indent": ["off", 2], //关闭缩进验证
    "eqeqeq": 0, //必须使用全等
    "max-classes-per-file": ["error", 20], //一个文件包含特定数量的类
    'comma-dangle': ['error', 'only-multiline'],
    'no-restricted-syntax': 0, // 设置不允许使用的语法，0：不设置
    'no-continue': 'off', //禁止使用continue
    'import/named': 'off', // TypeScript编译已确保已命名的导入存在于引用的模块中
    'no-bitwise': 'off', //禁止使用按位运算符
    'no-param-reassign': 'off', //禁止给参数重新赋值
    'no-else-return': 'off', //如果if语句里面有return,后面不能跟else语句
    'no-plusplus': 'off', //禁止使用++，--
    'class-methods-use-this': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [2, "always"], //语句强制分号结尾
    'arrow-parens': 'off', //箭头函数用小括号括起来
    'import/no-dynamic-require': 0,
    'guard-for-in': 0, //for in循环要用if语句过滤
    'global-require': 0,
    'quote-props': ["error", "as-needed"], // 支持一个对象里，属性名可以带引号也可以不带引号
    'linebreak-style': ["off", "windows"], //换行风格
    'no-shadow': ["error", {
      "allow": ["state"]
    }], // 处理vuex state变量与传参state重名的报错
    // 'no-param-reassign': ["error", {
    //   "props": true,
    //   "ignorePropertyModificationsFor": ["state"]
    // }],
    'max-len': ["error", {
      "code": 250
    }], //字符串最大长度
    'no-unused-vars': [0, {
      'vars': 'all',
      'args': 'none'
    }], //不能有声明后未被使用的变量或参数
    'no-lonely-if': 'off', //禁止else语句内只有if语句
    'object-curly-newline': ['error', {
      'consistent': true
    }],
    'prefer-destructuring': 'off',
    'dot-notation': 'off', // 允许 this['key']写法
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // "@typescript-eslint/camelcase": ["error", { "properties": "never" }], // 驼峰命名检测
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      }
    ]
  }
}
