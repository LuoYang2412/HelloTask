/**
 * @Author: LuoYang
 * @Date: 2021/7/14 4:27 下午
 * @Description: mock配置
 */
import Mock from "mockjs";
import AuthApiSource from "./source/AuthApiSource";
import TaskApiSource from "./source/TaskApiSource";
import Urls from "@/const/Urls";
import UserApiSource from "@/mock/source/UserApiSource";

Mock.mock(RegExp(Urls.auth.login), AuthApiSource.login);

Mock.mock(RegExp(Urls.auth.code), AuthApiSource.generateCodeUrl);

Mock.mock(RegExp(Urls.user.info), UserApiSource.info);

Mock.mock(RegExp(Urls.task.getTaskList), TaskApiSource.taskList);
