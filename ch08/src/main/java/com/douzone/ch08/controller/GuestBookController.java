package com.douzone.ch08.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.ch08.dto.JSONResult;
import com.douzone.ch08.vo.GuestBookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GuestBookController {
	
	@PostMapping("")
	public JSONResult ex01(@RequestBody GuestBookVo vo) {
		// System.out.println(vo);
		
		// guestbookService.addMessage(vo);
		vo.setNo(1L);
		vo.setPassword("");
		
		return JSONResult.success(vo);
	}
	
	@GetMapping("")
	public JSONResult ex02() {
		List<GuestBookVo> list = new ArrayList<>();
		
		GuestBookVo vo1 = new GuestBookVo();
		vo1.setNo(1L);
		vo1.setName("둘리1");
		vo1.setMessage("안녕1");
		list.add(vo1);
		
		GuestBookVo vo2 = new GuestBookVo();
		vo2.setNo(2L);
		vo2.setName("둘리2");
		vo2.setMessage("안녕2");
		list.add(vo2);
		
		GuestBookVo vo3 = new GuestBookVo();
		vo3.setNo(3L);
		vo3.setName("둘리3");
		vo3.setMessage("안녕3");
		list.add(vo3);
		
		return JSONResult.success(list);
	}
	
	@DeleteMapping("")
	public JSONResult ex03(Long no, String password) {
		// guestBookService.deleteMessage(no, password);
		return JSONResult.success(no);
	}
}