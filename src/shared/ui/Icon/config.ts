import Star from '../../assets/icons/star.svg?react';
import Logo_1 from '../../assets/icons/logo_half1.svg?react';
import Logo_2 from '../../assets/icons/logo_half2.svg?react';
import Check from '../../assets/icons/check.svg?react';
import Settings from '../../assets/icons/settings.svg?react';
import ArrowDown from '../../assets/icons/arrow_down.svg?react';
import Book from '../../assets/icons/book.svg?react';
import User from '../../assets/icons/user.svg?react';
import Notifications from '../../assets/icons/notification.svg?react';
import Sort from '../../assets/icons/sort.svg?react';
import Erase from '../../assets/icons/erase.svg?react';
import Plus from '../../assets/icons/plus.svg?react';
import Bookmark from '../../assets/icons/bookmark.svg?react';
import Download from '../../assets/icons/download.svg?react';
import Search from '../../assets/icons/search.svg?react';

export const icons = {
	star: Star,
	logo_half1: Logo_1,
	logo_half2: Logo_2,
	check: Check,
	settings: Settings,
	arrowDown: ArrowDown,
	book: Book,
	user: User,
	notifications: Notifications,
	sort: Sort,
	erase: Erase,
	plus: Plus,
	bookmark: Bookmark,
	download: Download,
	search: Search,
} as const;

export const size = {
	standart: 24,
	secondary: 16,
	auto: 'auto',
} as const;
