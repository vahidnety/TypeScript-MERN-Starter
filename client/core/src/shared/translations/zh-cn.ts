import Translation from "../../models/client/Translation";

const TRANSLATION: Translation = {
    locale: "zh-CN",
    messages: {
        // App basic info
        "app.name": "Typescript MERN Starter",
        "app.footer": "Copyright © 2019 公司版权所有",

        // Pages.
        // pattern: page.<page_name>.<section>
        "page.home": "首页",
        "page.about": "关于",
        "page.about.introduction": "本项目使用Typescript来构建一个REST架构的web应用。在这个项目的基础上你可以仅仅使用一种编程语言便能实现服务器端、web端、和移动端的应用开发。",
        "page.about.learn_more": "了解更多",
        "page.me": "我",
        "page.me.login": "登录",
        "page.me.sign_up": "注册",
        "page.me.update": "更新个人信息",
        "page.me.logout": "退出登录",
        "page.consent.greeting": "{email}您好，",
        "page.consent.description": "{app_name}需要访问您的账号。",
        "page.consent.inquiry": "请问是否授权？",
        "page.avatar.title": "调整您的头像",
        "page.avatar.rotate": "旋转",
        "page.avatar.zoom": "缩放",
        "page.avatar.inquiry": "确定使用这张照片吗？",
        "page.article.add": "新建文章",
        "page.article.edit": "编辑文章",
        "page.article.delete": "删除文章：{title}",
        "page.article.delete_confirmation": "删除后的文章不可恢复，您确定要删除吗？",
        "page.article.empty": "目前还没有任何文章。",
        "page.insert_image.title": "插入图片",
        "page.insert_image.fill_description": "图片描述",
        "page.insert_image.fill_link": "图片链接",
        "page.insert_image.upload": "本地上传",

        // Models.
        // pattern: <model_name>.<model_property>.<model_property_values>
        "user.email": "邮箱",
        "user.password": "密码",
        "user.confirm_password": "确认密码",
        "user.name": "名字",
        "user.photo": "头像",
        "user.gender": "性别",
        "user.gender.male": "男",
        "user.gender.female": "女",
        "user.gender.other": "其它",
        "user.address": "地址",
        "user.website": "个人网站",
        "article.title": "标题",
        "article.content": "正文",
        "article.content_placeholder": "不少于100字",
        "article.created_at": "创建于",
        "article.updated_at": "更新于",

        // Components.
        // pattern: component.<component_name>.<action>
        "component.button.file_select": "选择文件",
        "component.button.submit": "提交",
        "component.button.confirm": "确认",
        "component.button.cancel": "取消",
        "component.button.approve": "授权",
        "component.button.deny": "拒绝",
        "component.button.update": "更新",
        "component.button.delete": "删除",
        "component.button.edit": "编辑",
        "component.button.create": "创建",

        // Toasts.
        // pattern: toast.<model>.<info>
        "toast.user.general_error": "找不到该用户，请检查",
        "toast.user.invalid_token_error": "请先登录",
        "toast.user.sign_in_successfully": "登录成功",
        "toast.user.sign_in_failed": "登录失败",
        "toast.user.deny_consent": "请授权以完成注册",
        "toast.user.update_profile_successfully": "个人信息更新成功",
        "toast.user.update_profile_failed": "个人信息更新失败",
        "toast.user.upload_avatar_failed": "头像更新失败",
        "toast.user.upload_exist_account": "相同的账户已存在",
        "toast.user.account_not_found": "该账户不存在",
        "toast.client.invalid": "非法客户端！",
        "toast.client.incorrect_url": "客户端redirectUri错误！",
        "toast.article.save_successfully": "成功保存您的文章",
        "toast.article.delete_successfully": "成功删除您的文章",
        "toast.article.title_empty": "标题不能为空",
        "toast.article.content_empty": "正文不能为空",
        "toast.article.title_too_long": "标题不能长于100字",
        "toast.article.content_too_short": "正文不能短于100字",
        "toast.article.invalid_author": "您并非本文的作者！",
        "toast.article.not_found": "不存在的文章！",
        "toast.article.insert_image_failed": "图片插入失败",
        "toast.user.attack_alert": "侦测到非法攻击",
        "toast.user.email": "这不是一个合法的邮箱",
        "toast.user.email_not_found": "找不到该邮箱",
        "toast.user.password_error": "密码错误",
        "toast.user.password_too_short": "密码不能短于6个字符",
        "toast.user.password_empty": "密码不能为空",
        "toast.user.confirm_password": "密码不一致",
        "toast.user.name": "名字不能为空",
        "toast.user.gender": "这不是一个合法的性别",
    }
};

export default TRANSLATION;