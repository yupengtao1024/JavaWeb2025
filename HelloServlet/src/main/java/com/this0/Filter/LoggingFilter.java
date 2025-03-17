package com.this0.Filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebFilter(
        filterName = "logginFilter",
        urlPatterns = {"/servletA", "*.html"},
        servletNames = {"servletBName"}
)
public class LoggingFilter implements Filter {

    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        // 参数父转子
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        // 拼接日志文本
        String requestURI = request.getRequestURI();
        String time = dateFormat.format(new Date());
        String beforeLogging = requestURI + "在" + time + "被请求了";

        // 打印日志
        System.out.println(beforeLogging);

        // 获取系统时间
        long t1 = System.currentTimeMillis();

        // 放行请求
        filterChain.doFilter(request, response);

        // 获取系统时间
        long t2 = System.currentTimeMillis();

        //  拼接日志文本
        String afterLogging = requestURI + "在" + time + "的请求耗时:" + (t2 - t1) + "毫秒";

        // 打印日志
        System.out.println(afterLogging);

    }
}
