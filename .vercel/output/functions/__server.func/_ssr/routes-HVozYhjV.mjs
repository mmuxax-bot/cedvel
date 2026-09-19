import { i as __toESM } from "../_runtime.mjs";
import { R as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PrivacyArticle } from "./privacy-content-Cuzz3Szo.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { A as ArrowLeft, C as ChevronRight, D as CalendarRange, E as ChartColumn, O as CalendarDays, S as CircleCheck, T as Check, _ as Download, a as Trash2, b as Clock3, c as Search, d as Moon, f as MapPin, g as Ellipsis, h as Layers, k as Bell, l as Plus, m as LayoutGrid, n as Volume2, o as Shield, p as ListTodo, r as User, s as Settings, t as X, u as NotebookPen, v as Crown, w as ChevronLeft, x as Circle, y as Clock } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as startOfWeek, i as startOfDay, n as format, o as addHours, r as isSameDay, s as addDays, t as az } from "../_libs/date-fns.mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-HVozYhjV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLAN_TYPE_LABEL = {
	lesson: "Dərs",
	task: "Tapşırıq",
	event: "Tədbir",
	note: "Qeyd"
};
var PLAN_COLORS = [
	{
		id: "plan-1",
		label: "Mürəkkəb"
	},
	{
		id: "plan-2",
		label: "Teal"
	},
	{
		id: "plan-3",
		label: "Terrakota"
	},
	{
		id: "plan-4",
		label: "Qum"
	},
	{
		id: "plan-5",
		label: "Meşə"
	},
	{
		id: "plan-6",
		label: "Slate"
	},
	{
		id: "plan-7",
		label: "Gül"
	}
];
var DEFAULT_CATEGORIES = [
	"Dərs",
	"Tapşırıq",
	"Tədbir",
	"Şəxsi"
];
var REMINDER_OFFSETS = [
	{
		min: null,
		label: "Xəbərdarlıq yoxdur"
	},
	{
		min: 0,
		label: "Dərs başlayanda"
	},
	{
		min: 5,
		label: "5 dəqiqə əvvəl"
	},
	{
		min: 10,
		label: "10 dəqiqə əvvəl"
	},
	{
		min: 15,
		label: "15 dəqiqə əvvəl"
	},
	{
		min: 30,
		label: "30 dəqiqə əvvəl"
	},
	{
		min: 60,
		label: "1 saat əvvəl"
	}
];
function uid() {
	return crypto.randomUUID();
}
var useCedvel = create()(persist((set, get) => ({
	_hasHydrated: false,
	plans: [],
	isPremium: false,
	userName: "Rəşad",
	themeMode: "system",
	categories: [...DEFAULT_CATEGORIES],
	onboardingDone: false,
	weekStartsOn: 1,
	remindersEnabled: true,
	soundEnabled: true,
	setHasHydrated: (v) => set({ _hasHydrated: v }),
	completeOnboarding: () => set({ onboardingDone: true }),
	setUserName: (name) => {
		const trimmed = name.trim();
		set({ userName: trimmed.length === 0 ? "Rəşad" : trimmed });
	},
	setThemeMode: (mode) => set({ themeMode: mode }),
	setWeekStartsOn: (day) => set({ weekStartsOn: day }),
	setRemindersEnabled: (value) => set({ remindersEnabled: value }),
	setSoundEnabled: (value) => set({ soundEnabled: value }),
	addCategory: (name) => {
		const trimmed = name.trim();
		if (!trimmed) return {
			ok: false,
			reason: "Ad boş ola bilməz"
		};
		const { categories, isPremium } = get();
		if (categories.includes(trimmed)) return {
			ok: false,
			reason: "Bu kateqoriya artıq var"
		};
		if (!isPremium && categories.length >= 4) return {
			ok: false,
			reason: "limit"
		};
		set({ categories: [...categories, trimmed] });
		return { ok: true };
	},
	removeCategory: (name) => {
		set((s) => ({ categories: s.categories.filter((c) => c !== name) }));
	},
	addPlan: (input) => {
		const { plans, isPremium } = get();
		if (!isPremium && plans.length >= 7) return false;
		const plan = {
			...input,
			id: uid()
		};
		set({ plans: [...plans, plan] });
		return true;
	},
	updatePlan: (plan) => {
		set((s) => ({ plans: s.plans.map((p) => p.id === plan.id ? plan : p) }));
	},
	deletePlan: (id) => {
		set((s) => ({ plans: s.plans.filter((p) => p.id !== id) }));
	},
	toggleComplete: (id) => {
		set((s) => ({ plans: s.plans.map((p) => p.id === id ? {
			...p,
			isCompleted: !p.isCompleted
		} : p) }));
	},
	setPremium: (value) => set({ isPremium: value }),
	clearAllPlans: () => set({ plans: [] })
}), {
	name: "cedvel-v1",
	partialize: (s) => ({
		plans: s.plans,
		isPremium: s.isPremium,
		userName: s.userName,
		themeMode: s.themeMode,
		categories: s.categories,
		onboardingDone: s.onboardingDone,
		weekStartsOn: s.weekStartsOn,
		remindersEnabled: s.remindersEnabled,
		soundEnabled: s.soundEnabled
	}),
	onRehydrateStorage: () => () => {
		useCedvel.getState().setHasHydrated(true);
	}
}));
function remainingFreeSlots(state) {
	if (state.isPremium) return Infinity;
	return Math.max(0, 7 - state.plans.length);
}
function canAddPlan(state) {
	return state.isPremium || state.plans.length < 7;
}
function csvEscape(value) {
	return `"${value.replace(/"/g, "\"\"")}"`;
}
function exportPlansJson(plans) {
	return JSON.stringify(plans, null, 2);
}
function exportPlansCsv(plans) {
	return [[
		"Başlıq",
		"Alt başlıq",
		"Məkan",
		"Kateqoriya",
		"Başlama",
		"Bitmə",
		"Növ",
		"Tamamlanıb",
		"Qeyd"
	].join(","), ...plans.map((p) => [
		csvEscape(p.title),
		csvEscape(p.subtitle ?? ""),
		csvEscape(p.location ?? ""),
		csvEscape(p.category),
		p.startTime,
		p.endTime,
		p.type,
		p.isCompleted ? "bəli" : "xeyr",
		csvEscape(p.note ?? "")
	].join(","))].join("\n");
}
function apply(mode) {
	const dark = mode === "dark" || mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
	document.documentElement.classList.toggle("dark", dark);
}
function ThemeSync() {
	const themeMode = useCedvel((s) => s.themeMode);
	(0, import_react.useEffect)(() => {
		apply(themeMode);
		if (themeMode !== "system") return;
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => apply("system");
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, [themeMode]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-sm font-medium transition-[color,background-color,opacity,transform,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			secondary: "bg-surface text-fg shadow-card hover:bg-bg",
			ghost: "text-fg hover:bg-surface",
			outline: "border border-border bg-transparent hover:bg-surface",
			destructive: "bg-danger text-white hover:opacity-90",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2 text-sm text-fg shadow-card transition-[box-shadow,border-color] duration-[var(--motion-quick)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var PAGES = [
	{
		icon: CalendarDays,
		title: "Gününü planla",
		subtitle: "Dərs, tapşırıq və tədbirlərini bir yerdə saxla. Sadə və aydın."
	},
	{
		icon: ChartColumn,
		title: "İrəliləyişini gör",
		subtitle: "Statistika real datadan hesablanır — nə qədər tamamladığını izlə."
	},
	{
		icon: Crown,
		title: "Premium ilə daha çox",
		subtitle: "Limitsiz plan, ixrac, kateqoriyalar və təkmil statistika."
	}
];
function Onboarding({ onPrivacy }) {
	const [page, setPage] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)("Rəşad");
	const setUserName = useCedvel((s) => s.setUserName);
	const completeOnboarding = useCedvel((s) => s.completeOnboarding);
	const finish = () => {
		if (name.trim()) setUserName(name);
		completeOnboarding();
	};
	const isName = page === PAGES.length;
	const lastContent = page === PAGES.length - 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg px-6 pb-8 pt-[max(1rem,env(safe-area-inset-top))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					className: "text-muted",
					onClick: finish,
					children: "Keç"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 flex-col items-center justify-center text-center",
				children: !isName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: PAGES.map((p, i) => {
					const Icon = p.icon;
					if (i !== page) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-11",
									strokeWidth: 1.6
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-3xl font-semibold tracking-tight",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[15px] leading-relaxed text-muted",
								children: p.subtitle
							})
						]
					}, p.title);
				}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl font-semibold tracking-tight",
							children: "Sənə necə müraciət edək?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Adın ana səhifədə görünəcək"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-8 text-center text-base",
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Məsələn: Rəşad",
							autoFocus: true
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-6 flex gap-1.5",
				children: Array.from({ length: PAGES.length + 1 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i === page ? "h-2 w-6 rounded-full bg-primary" : "h-2 w-2 rounded-full bg-border" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "h-12 w-full text-base",
				onClick: () => {
					if (isName) finish();
					else setPage((p) => p + 1);
				},
				children: isName ? "Başla" : lastContent ? "Davam et" : "Davam et"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-center text-xs text-subtle",
				children: [
					"Davam etməklə",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "underline underline-offset-2",
						onClick: () => onPrivacy?.(),
						children: "məxfilik siyasəti"
					}),
					" ",
					"ilə razılaşırsınız. Məlumatlar yalnız bu cihazda saxlanılır."
				]
			})
		]
	});
}
var TABS = [
	{
		id: "home",
		label: "Cədvəl",
		icon: CalendarDays
	},
	{
		id: "week",
		label: "Həftə",
		icon: LayoutGrid
	},
	{
		id: "tasks",
		label: "Tapşırıq",
		icon: ListTodo
	},
	{
		id: "stats",
		label: "Statistika",
		icon: ChartColumn
	}
];
function Shell({ tab, onTab, onAdd, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex min-h-dvh max-w-lg flex-col bg-bg lg:max-w-[88rem] lg:flex-row",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-56 shrink-0 flex-col border-r border-border px-3 py-6 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 font-display text-xl font-semibold",
						children: "Cədvəl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 text-xs text-muted",
						children: "Gününə nəzarət et"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-8 flex flex-1 flex-col gap-1",
						children: TABS.map((t) => {
							const Icon = t.icon;
							const active = tab === t.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onTab(t.id),
								className: cn("flex h-11 items-center gap-3 rounded-[var(--radius-md)] px-3 text-sm font-medium", active ? "bg-primary text-primary-fg" : "text-muted hover:bg-surface"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), t.label]
							}, t.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onAdd,
						className: "mt-auto flex h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-primary text-sm font-medium text-primary-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Plan əlavə et"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-dvh min-w-0 flex-1 flex-col",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-x-0 bottom-0 z-20 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto mx-auto max-w-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative border-t border-border bg-surface/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-5 items-end px-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
									tab: TABS[0],
									current: tab,
									onTab
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
									tab: TABS[1],
									current: tab,
									onTab
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: onAdd,
										"aria-label": "Plan əlavə et",
										className: "-mt-7 flex size-14 items-center justify-center rounded-full bg-primary text-primary-fg shadow-card",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-6" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
									tab: TABS[2],
									current: tab,
									onTab
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
									tab: TABS[3],
									current: tab,
									onTab
								})
							]
						})
					})
				})
			})
		]
	});
}
function NavBtn({ tab, current, onTab }) {
	const Icon = tab.icon;
	const active = current === tab.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onTab(tab.id),
		className: cn("flex min-h-11 flex-col items-center justify-center gap-0.5 text-[11px] font-medium", active ? "text-primary" : "text-subtle"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), tab.label]
	});
}
var WEEKDAY_OPTIONS = [
	{
		value: 1,
		label: "Bazar ertəsi",
		short: "B.e."
	},
	{
		value: 2,
		label: "Çərşənbə axşamı",
		short: "Ç.a."
	},
	{
		value: 3,
		label: "Çərşənbə",
		short: "Çər."
	},
	{
		value: 4,
		label: "Cümə axşamı",
		short: "C.a."
	},
	{
		value: 5,
		label: "Cümə",
		short: "Cüm."
	},
	{
		value: 6,
		label: "Şənbə",
		short: "Şən."
	},
	{
		value: 0,
		label: "Bazar",
		short: "Baz."
	}
];
/** Hour starts shown as columns (08:00–19:00). */
var GRID_HOURS = [
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19
];
function weekStartAt(date = /* @__PURE__ */ new Date(), weekStartsOn = 1) {
	return startOfWeek(startOfDay(date), { weekStartsOn });
}
function weekStartMonday(date = /* @__PURE__ */ new Date()) {
	return weekStartAt(date, 1);
}
function weekDays(ws) {
	return Array.from({ length: 7 }, (_, i) => addDays(ws, i));
}
function isInWeek(date, ws) {
	const start = startOfDay(ws);
	const end = addDays(start, 7);
	return date >= start && date < end;
}
function formatTime(d) {
	return format(d, "HH:mm");
}
function formatHourLabel(hour) {
	return `${String(hour).padStart(2, "0")}:00`;
}
function formatShortWeekday(d) {
	return format(d, "EEEEEE", { locale: az });
}
function formatDayMonth(d) {
	return format(d, "d MMM", { locale: az });
}
function formatDayMonthYear(d) {
	return format(d, "d MMMM yyyy, EEEE", { locale: az });
}
function toLocalInput(d) {
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function fromLocalInput(value) {
	const d = new Date(value);
	return Number.isNaN(d.getTime()) ? /* @__PURE__ */ new Date() : d;
}
function defaultStartEnd() {
	const start = addHours(/* @__PURE__ */ new Date(), 1);
	start.setMinutes(0, 0, 0);
	return {
		start,
		end: addHours(start, 1)
	};
}
function slotDate(day, hour, minute = 0) {
	return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, minute, 0, 0);
}
function planOverlapsHour(plan, day, hour) {
	const a = new Date(plan.startTime).getTime();
	const b = new Date(plan.endTime).getTime();
	const s = slotDate(day, hour).getTime();
	return a < slotDate(day, hour + 1).getTime() && b > s;
}
function Timetable({ weekStart, plans, selection, onSelect, onOpenPlan }) {
	const days = weekDays(weekStart);
	const today = /* @__PURE__ */ new Date();
	const dragging = (0, import_react.useRef)(false);
	const mouseHandled = (0, import_react.useRef)(false);
	const selectionRef = (0, import_react.useRef)(selection);
	selectionRef.current = selection;
	const occupancy = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const day of days) for (const hour of GRID_HOURS) {
			const key = `${day.toDateString()}-${hour}`;
			map.set(key, plans.filter((p) => planOverlapsHour(p, day, hour)));
		}
		return map;
	}, [days, plans]);
	const applyCell = (day, hour, extend) => {
		const occupied = occupancy.get(`${day.toDateString()}-${hour}`) ?? [];
		if (occupied.length > 0) {
			onOpenPlan(occupied[0]);
			onSelect(null);
			return;
		}
		const current = selectionRef.current;
		if (extend && current && isSameDay(current.day, day)) {
			onSelect({
				day,
				startHour: Math.min(current.startHour, hour),
				endHour: Math.max(current.endHour - 1, hour) + 1
			});
			return;
		}
		if (current && isSameDay(current.day, day) && hour >= current.startHour && hour < current.endHour && current.endHour - current.startHour === 1) {
			onSelect(null);
			return;
		}
		if (current && isSameDay(current.day, day)) {
			onSelect({
				day,
				startHour: Math.min(current.startHour, hour),
				endHour: Math.max(current.endHour - 1, hour) + 1
			});
			return;
		}
		onSelect({
			day,
			startHour: hour,
			endHour: hour + 1
		});
	};
	const selected = (day, hour) => Boolean(selection && isSameDay(selection.day, day) && hour >= selection.startHour && hour < selection.endHour);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto overscroll-x-contain rounded-[var(--radius-lg)] bg-surface shadow-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-max",
			style: { width: "calc(var(--timetable-day) + 12 * var(--timetable-hour))" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-20 flex border-b border-border bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky left-0 z-30 flex w-[var(--timetable-day)] shrink-0 items-end justify-center bg-surface pb-2 text-xs font-medium text-muted",
					children: "Gün"
				}), GRID_HOURS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-11 w-[var(--timetable-hour)] shrink-0 items-end justify-center pb-2 text-xs font-medium tabular-nums text-muted",
					children: formatHourLabel(h)
				}, h))]
			}), days.map((day) => {
				const isToday = isSameDay(day, today);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex border-b border-border last:border-b-0", isToday && "bg-primary/5"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("sticky left-0 z-10 flex w-[var(--timetable-day)] shrink-0 flex-col items-center justify-center bg-surface px-1", isToday && "bg-primary/5 text-primary"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium uppercase text-muted",
							children: formatShortWeekday(day)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold tabular-nums",
							children: day.getDate()
						})]
					}), GRID_HOURS.map((hour) => {
						const key = `${day.toDateString()}-${hour}`;
						const plan = (occupancy.get(key) ?? [])[0];
						const isSel = selected(day, hour);
						const startsHere = plan && isSameDay(new Date(plan.startTime), day) && new Date(plan.startTime).getHours() === hour;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `${formatShortWeekday(day)} ${formatHourLabel(hour)}`,
							onPointerDown: (e) => {
								if (e.pointerType !== "mouse" || plan) return;
								dragging.current = true;
								mouseHandled.current = true;
								e.currentTarget.setPointerCapture(e.pointerId);
								applyCell(day, hour, false);
							},
							onPointerEnter: () => {
								if (!dragging.current) return;
								applyCell(day, hour, true);
							},
							onPointerUp: () => {
								dragging.current = false;
							},
							onClick: () => {
								if (mouseHandled.current) {
									mouseHandled.current = false;
									return;
								}
								applyCell(day, hour, false);
							},
							className: cn("h-[var(--timetable-row)] w-[var(--timetable-hour)] shrink-0 border-l border-border px-0.5 text-left", isSel && !plan && "bg-primary/15 ring-1 ring-inset ring-primary", plan && `plan-dot-${plan.color} text-primary-fg`),
							children: plan && startsHere ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-xs font-medium leading-tight",
								children: plan.title
							}) : null
						}, hour);
					})]
				}, day.toISOString());
			})]
		})
	});
}
function HomeScreen({ onSearch, onSettings, onPremium, onAdd, onOpen }) {
	const userName = useCedvel((s) => s.userName);
	const plans = useCedvel((s) => s.plans);
	const isPremium = useCedvel((s) => s.isPremium);
	const weekStartsOn = useCedvel((s) => s.weekStartsOn);
	const setWeekStartsOn = useCedvel((s) => s.setWeekStartsOn);
	const [anchor, setAnchor] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const [selection, setSelection] = (0, import_react.useState)(null);
	const ws = weekStartAt(anchor, weekStartsOn);
	const end = addDays(ws, 6);
	const slots = remainingFreeSlots({
		isPremium,
		plans
	});
	const canAdd = canAddPlan({
		isPremium,
		plans
	});
	const addFromSelection = () => {
		if (!canAdd) {
			onPremium();
			return;
		}
		if (!selection) {
			onAdd();
			return;
		}
		onAdd({
			start: slotDate(selection.day, selection.startHour),
			end: slotDate(selection.day, selection.endHour)
		});
		setSelection(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col px-4 pb-32 pt-4 lg:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: ["Salam, ", userName]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-[1.65rem] font-semibold leading-tight tracking-tight",
						children: "Cədvəl"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: onSearch,
						"aria-label": "Axtar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: onSettings,
						"aria-label": "Parametrlər",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {})
					})]
				})]
			}),
			!isPremium ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onPremium,
				className: "mt-3 flex w-full items-center justify-between rounded-[var(--radius-lg)] bg-surface px-4 py-3 text-left shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-medium",
					children: ["Premium: limitsiz plan", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 block text-xs font-normal text-muted",
						children: [
							slots,
							" pulsuz yer qalıb · ",
							7,
							" plan limiti"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold text-primary",
					children: "Aç"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-semibold uppercase tracking-wide text-muted",
					children: "Həftənin başlanğıcı"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1.5 overflow-x-auto pb-1",
					children: WEEKDAY_OPTIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setWeekStartsOn(d.value);
							setSelection(null);
						},
						className: weekStartsOn === d.value ? "h-10 shrink-0 rounded-full bg-primary px-3 text-sm font-medium text-primary-fg" : "h-10 shrink-0 rounded-full bg-surface px-3 text-sm text-muted shadow-card",
						children: d.short
					}, d.value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						formatDayMonth(ws),
						" – ",
						formatDayMonth(end)
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Əvvəlki həftə",
						onClick: () => {
							setAnchor(addDays(ws, -7));
							setSelection(null);
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Növbəti həftə",
						onClick: () => {
							setAnchor(addDays(ws, 7));
							setSelection(null);
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs text-subtle",
				children: "Saatlar yuxarıda, günlər solda. Boş xananı seçin — eyni gündən bir neçə saat da seçmək olar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timetable, {
				weekStart: ws,
				plans,
				selection,
				onSelect: setSelection,
				onOpenPlan: onOpen
			}),
			selection ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-2 rounded-[var(--radius-lg)] bg-surface px-3 py-2 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "min-w-0 flex-1 text-sm",
						children: [
							selection.day.getDate(),
							" ",
							isSameDay(selection.day, /* @__PURE__ */ new Date()) ? "· bu gün" : null,
							" ·",
							" ",
							formatHourLabel(selection.startHour),
							"–",
							formatHourLabel(selection.endHour)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => setSelection(null),
						children: "Ləğv"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: addFromSelection,
						children: "Plan əlavə et"
					})
				]
			}) : null
		]
	});
}
function PlanCard({ plan, showDate = false, onOpen, onEdit }) {
	const toggleComplete = useCedvel((s) => s.toggleComplete);
	const deletePlan = useCedvel((s) => s.deletePlan);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("flex gap-3 rounded-[var(--radius-xl)] bg-surface p-3.5 shadow-card", `plan-ring-${plan.color} border`),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onOpen,
			className: "flex min-w-0 flex-1 items-stretch gap-3 text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-12 shrink-0 flex-col items-center justify-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold tabular-nums",
							children: formatTime(new Date(plan.startTime))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("my-1 h-4 w-0.5 rounded-full", `plan-bar-${plan.color}`) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted tabular-nums",
							children: formatTime(new Date(plan.endTime))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("w-1 shrink-0 self-stretch rounded-full", `plan-bar-${plan.color}`) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("truncate text-[15px] font-semibold leading-snug", plan.isCompleted && "text-muted line-through"),
							children: plan.title
						}),
						plan.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-muted",
							children: plan.subtitle
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-subtle",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: PLAN_TYPE_LABEL[plan.type] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: plan.category }),
								showDate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDayMonth(new Date(plan.startTime)) })] }) : null,
								plan.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), plan.location]
								}) : null
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 flex-col items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "relative flex size-11 items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: plan.isCompleted,
					onChange: () => toggleComplete(plan.id),
					className: "size-5 accent-primary",
					"aria-label": "Tamamla"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "flex size-11 list-none items-center justify-center rounded-[var(--radius-md)] text-muted [&::-webkit-details-marker]:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Əməliyyatlar"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-0 z-10 mt-1 w-36 overflow-hidden rounded-[var(--radius-md)] bg-surface py-1 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full px-3 py-2.5 text-left text-sm hover:bg-bg",
						onClick: onEdit,
						children: "Redaktə et"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full px-3 py-2.5 text-left text-sm text-danger hover:bg-bg",
						onClick: () => deletePlan(plan.id),
						children: "Sil"
					})]
				})]
			})]
		})]
	});
}
function WeeklyScreen({ onOpen, onEdit }) {
	const plans = useCedvel((s) => s.plans);
	const weekStartsOn = useCedvel((s) => s.weekStartsOn);
	const [anchor, setAnchor] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const today = /* @__PURE__ */ new Date();
	const ws = weekStartAt(anchor, weekStartsOn);
	const days = weekDays(ws);
	const defaultDay = days.find((d) => isSameDay(d, today)) ?? days[0];
	const [selected, setSelected] = (0, import_react.useState)(defaultDay);
	const selectedSafe = isInWeek(selected, ws) ? selected : defaultDay;
	const dayPlans = (0, import_react.useMemo)(() => plans.filter((p) => isSameDay(new Date(p.startTime), selectedSafe)).sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()), [plans, selectedSafe]);
	const end = addDays(ws, 6);
	const changeWeek = (delta) => {
		const nextWs = addDays(ws, 7 * delta);
		setAnchor(nextWs);
		const nextDays = weekDays(nextWs);
		const keep = nextDays.find((d) => isSameDay(d, today));
		setSelected(keep ?? nextDays[0]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col px-5 pb-28 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold",
					children: "Həftəlik plan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => changeWeek(-1),
						"aria-label": "Əvvəlki həftə",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => changeWeek(1),
						"aria-label": "Növbəti həftə",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					formatDayMonth(ws),
					" – ",
					formatDayMonthYear(end).split(",")[0]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-1 mt-4 flex gap-1.5 overflow-x-auto pb-1",
				children: days.map((day) => {
					const isToday = isSameDay(day, today);
					const isSel = isSameDay(day, selectedSafe);
					const has = plans.some((p) => isSameDay(new Date(p.startTime), day));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSelected(day),
						className: cn("flex h-[72px] w-12 shrink-0 flex-col items-center justify-center rounded-[var(--radius-lg)]", isSel ? "bg-primary text-primary-fg" : "bg-surface text-fg shadow-card"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-xs uppercase", isSel ? "text-primary-fg/70" : "text-muted"),
								children: formatShortWeekday(day)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-semibold tabular-nums",
								children: day.getDate()
							}),
							has ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-0.5 size-1.5 rounded-full", isSel ? "bg-primary-fg" : "bg-primary", isToday && !isSel && "bg-primary") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-0.5 size-1.5" })
						]
					}, day.toISOString());
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 text-sm font-medium text-muted",
				children: formatDayMonthYear(selectedSafe)
			}),
			dayPlans.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-center text-muted",
				children: "Bu gün plan yoxdur"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3",
				children: dayPlans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCard, {
					plan: p,
					showDate: true,
					onOpen: () => onOpen(p),
					onEdit: () => onEdit(p)
				}) }, p.id))
			})
		]
	});
}
function TasksScreen({ onOpen, onEdit }) {
	const tasks = useCedvel((s) => s.plans).filter((p) => p.type === "task").sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
	const pending = tasks.filter((t) => !t.isCompleted);
	const done = tasks.filter((t) => t.isCompleted);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pb-28 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Tapşırıqlar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					count: pending.length,
					label: "Gözləyən",
					tone: "warn"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					count: done.length,
					label: "Tamamlanan",
					tone: "ok"
				})]
			}),
			tasks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListTodo, {
						className: "size-12 text-subtle",
						strokeWidth: 1.4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Tapşırıq yoxdur"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xs text-sm text-subtle",
						children: "Yeni plan əlavə edərkən növü «Tapşırıq» seçin."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-6",
				children: [pending.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-sm font-semibold text-muted",
					children: "Gözləyən"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: pending.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCard, {
						plan: p,
						showDate: true,
						onOpen: () => onOpen(p),
						onEdit: () => onEdit(p)
					}) }, p.id))
				})] }) : null, done.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-sm font-semibold text-muted",
					children: "Tamamlanan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: done.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCard, {
						plan: p,
						showDate: true,
						onOpen: () => onOpen(p),
						onEdit: () => onEdit(p)
					}) }, p.id))
				})] }) : null]
			})
		]
	});
}
function Chip({ count, label, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: tone === "ok" ? "rounded-full bg-success/12 px-3.5 py-2 text-sm text-success" : "rounded-full bg-danger/12 px-3.5 py-2 text-sm text-danger",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold tabular-nums",
				children: count
			}),
			" ",
			label
		]
	});
}
function Progress({ value, className, barClassName }) {
	const pct = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-2 w-full overflow-hidden rounded-full bg-border", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full bg-primary transition-[width] duration-[var(--motion-fast)] ease-[var(--ease-smooth-out)]", barClassName),
			style: { width: `${pct}%` }
		})
	});
}
function completionRate(plans) {
	if (plans.length === 0) return 0;
	return plans.filter((p) => p.isCompleted).length / plans.length;
}
function typeStats(plans, type) {
	const items = plans.filter((p) => p.type === type);
	const done = items.filter((p) => p.isCompleted).length;
	return {
		total: items.length,
		done,
		rate: items.length === 0 ? 0 : done / items.length
	};
}
function weekdayCounts(plans, ws = weekStartMonday()) {
	return Array.from({ length: 7 }, (_, i) => {
		const day = addDays(ws, i);
		const dayPlans = plans.filter((p) => isSameDay(new Date(p.startTime), day));
		return {
			day,
			label: formatShortWeekday(day),
			total: dayPlans.length,
			done: dayPlans.filter((p) => p.isCompleted).length
		};
	});
}
function categoryBreakdown(plans) {
	const map = /* @__PURE__ */ new Map();
	for (const p of plans) {
		const key = p.category.trim() || "Digər";
		const cur = map.get(key) ?? {
			total: 0,
			done: 0
		};
		cur.total += 1;
		if (p.isCompleted) cur.done += 1;
		map.set(key, cur);
	}
	return [...map.entries()].map(([name, v]) => ({
		name,
		total: v.total,
		done: v.done,
		rate: v.total ? v.done / v.total : 0
	}));
}
function lastSevenDays(plans, today = /* @__PURE__ */ new Date()) {
	return Array.from({ length: 7 }, (_, i) => {
		const day = addDays(today, i - 6);
		const dayPlans = plans.filter((p) => isSameDay(new Date(p.startTime), day));
		return {
			day,
			label: formatShortWeekday(day),
			total: dayPlans.length,
			done: dayPlans.filter((p) => p.isCompleted).length
		};
	});
}
var TYPES$1 = [
	"lesson",
	"task",
	"event"
];
function StatsScreen({ onPremium }) {
	const plans = useCedvel((s) => s.plans);
	const isPremium = useCedvel((s) => s.isPremium);
	const weekStartsOn = useCedvel((s) => s.weekStartsOn);
	const rate = completionRate(plans);
	const completed = plans.filter((p) => p.isCompleted).length;
	const ws = weekStartAt(/* @__PURE__ */ new Date(), weekStartsOn);
	const weekCount = plans.filter((p) => {
		const d = new Date(p.startTime);
		return d >= ws && d < new Date(ws.getTime() + 6048e5);
	}).length;
	const todayCount = plans.filter((p) => isSameDay(new Date(p.startTime), /* @__PURE__ */ new Date())).length;
	const weekData = weekdayCounts(plans, ws).map((d) => ({
		name: d.label,
		Tamam: d.done,
		Qalan: Math.max(0, d.total - d.done)
	}));
	const cats = categoryBreakdown(plans);
	const last7 = lastSevenDays(plans);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pb-28 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Statistikalar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-6 flex size-44 items-center justify-center rounded-full border-[12px] border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-full items-center justify-center rounded-full",
					style: { background: `conic-gradient(var(--color-primary) ${rate * 360}deg, var(--color-border) 0deg)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex size-[calc(100%-24px)] flex-col items-center justify-center rounded-full bg-bg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl font-semibold tabular-nums text-primary",
							children: [Math.round(rate * 100), "%"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Tamamlanma"
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Layers,
						label: "Ümumi plan",
						value: plans.length
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: CircleCheck,
						label: "Tamamlanan",
						value: completed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Clock,
						label: "Gözləyən",
						value: plans.length - completed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: CalendarRange,
						label: "Bu həftə",
						value: weekCount
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-lg font-semibold",
				children: "Növ üzrə irəliləyiş"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-4 rounded-[var(--radius-xl)] bg-surface p-4 shadow-card",
				children: TYPES$1.map((t) => {
					const s = typeStats(plans, t);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: PLAN_TYPE_LABEL[t] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-muted",
							children: s.total === 0 ? "plan yoxdur" : `${s.done}/${s.total} · ${Math.round(s.rate * 100)}%`
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: s.rate * 100 })] }, t);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-subtle",
				children: [
					"Bugün ",
					todayCount,
					" plan · faizlər real tamamlanmadan hesablanır"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-lg font-semibold",
				children: "Təkmil statistika"
			}),
			isPremium ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[var(--radius-xl)] bg-surface p-4 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-sm font-medium",
							children: "Bu həftə"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-44",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: weekData,
									barGap: 2,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "var(--color-border)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "name",
											tick: { fontSize: 11 },
											stroke: "var(--color-muted)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											allowDecimals: false,
											tick: { fontSize: 11 },
											stroke: "var(--color-muted)",
											width: 24
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "Tamam",
											fill: "var(--color-primary)",
											radius: [
												4,
												4,
												0,
												0
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "Qalan",
											fill: "var(--color-border)",
											radius: [
												4,
												4,
												0,
												0
											]
										})
									]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[var(--radius-xl)] bg-surface p-4 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-sm font-medium",
							children: "Kateqoriya üzrə"
						}), cats.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Hələ plan yoxdur"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: [
										c.done,
										"/",
										c.total
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: c.rate * 100 })] }, c.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[var(--radius-xl)] bg-surface p-4 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-sm font-medium",
							children: "Son 7 gün"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: last7.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "capitalize text-muted",
									children: d.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [
										d.done,
										"/",
										d.total
									]
								})]
							}, d.day.toISOString()))
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-[var(--radius-xl)] bg-surface p-5 text-center shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Həftəlik qrafik, kateqoriya və son 7 günün təhlili Premium-dadır."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					onClick: onPremium,
					children: "Premium-a bax"
				})]
			})
		]
	});
}
function StatCard({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-xl)] bg-surface p-4 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-2xl font-semibold tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: label
			})
		]
	});
}
function Overlay({ title, onBack, action, children, tone = "default" }) {
	const ink = tone === "ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: ink ? "fixed inset-0 z-40 flex flex-col bg-primary text-primary-fg" : "fixed inset-0 z-40 flex flex-col bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center gap-1 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: onBack,
					"aria-label": "Geri",
					className: ink ? "text-primary-fg hover:bg-white/10" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "min-w-0 flex-1 truncate text-base font-semibold",
					children: title
				}),
				action
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children
		})]
	});
}
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = "Label";
var fired = /* @__PURE__ */ new Set();
var FIRED_KEY = "cedvel-fired-reminders";
function loadFired() {
	if (typeof sessionStorage === "undefined") return;
	try {
		const raw = sessionStorage.getItem(FIRED_KEY);
		if (!raw) return;
		for (const id of JSON.parse(raw)) fired.add(id);
	} catch {}
}
function saveFired() {
	if (typeof sessionStorage === "undefined") return;
	try {
		sessionStorage.setItem(FIRED_KEY, JSON.stringify([...fired]));
	} catch {}
}
loadFired();
function reminderAt(plan) {
	if (plan.reminderOffsetMin == null) return null;
	const start = new Date(plan.startTime).getTime();
	if (Number.isNaN(start)) return null;
	return /* @__PURE__ */ new Date(start - plan.reminderOffsetMin * 6e4);
}
function dueReminders(plans, now = Date.now()) {
	const due = [];
	for (const plan of plans) {
		const at = reminderAt(plan);
		if (!at) continue;
		const start = new Date(plan.startTime).getTime();
		const t = at.getTime();
		if (t > now) continue;
		if (now - t > 18e5) continue;
		if (now > start + 6e4) continue;
		const key = `${plan.id}-${t}`;
		if (fired.has(key)) continue;
		fired.add(key);
		saveFired();
		due.push(plan);
	}
	return due;
}
function reminderBody(plan) {
	const mins = plan.reminderOffsetMin ?? 0;
	return `${mins === 0 ? "indi başlayır" : `${mins} dəqiqə sonra başlayır`}${plan.location ? ` · ${plan.location}` : ""}`;
}
async function requestNotifyPermission() {
	if (typeof Notification === "undefined") return false;
	if (Notification.permission === "granted") return true;
	if (Notification.permission === "denied") return false;
	return await Notification.requestPermission() === "granted";
}
function showSystemNotification(event) {
	if (typeof Notification === "undefined") return;
	if (Notification.permission !== "granted") return;
	try {
		new Notification("Cədvəl", {
			body: `${event.title} — ${event.body}`,
			tag: event.id,
			silent: false
		});
	} catch {}
}
function playReminderSound() {
	const AudioCtx = window.AudioContext || window.webkitAudioContext;
	if (!AudioCtx) return;
	const ctx = new AudioCtx();
	ctx.resume();
	const now = ctx.currentTime;
	[
		880,
		1174.66,
		1567.98
	].forEach((freq, i) => {
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = "triangle";
		osc.frequency.value = freq;
		const t = now + i * .12;
		gain.gain.setValueAtTime(1e-4, t);
		gain.gain.exponentialRampToValueAtTime(.22, t + .02);
		gain.gain.exponentialRampToValueAtTime(1e-4, t + .38);
		osc.connect(gain);
		gain.connect(ctx.destination);
		osc.start(t);
		osc.stop(t + .4);
	});
	window.setTimeout(() => void ctx.close(), 1600);
}
function unlockReminderAudio() {
	try {
		const AudioCtx = window.AudioContext || window.webkitAudioContext;
		if (!AudioCtx) return;
		const ctx = new AudioCtx();
		ctx.resume().then(() => void ctx.close());
	} catch {}
}
function eventFromPlan(plan) {
	return {
		id: `${plan.id}-${reminderAt(plan)?.getTime() ?? 0}`,
		title: plan.title,
		body: reminderBody(plan),
		planId: plan.id
	};
}
var TEST_EVENT = "cedvel-test-reminder";
function dispatchTestReminder() {
	window.dispatchEvent(new Event(TEST_EVENT));
}
function ReminderHost() {
	const plans = useCedvel((s) => s.plans);
	const remindersEnabled = useCedvel((s) => s.remindersEnabled);
	const soundEnabled = useCedvel((s) => s.soundEnabled);
	const [queue, setQueue] = (0, import_react.useState)([]);
	const push = (event) => {
		setQueue((q) => [...q, event]);
		if (soundEnabled) playReminderSound();
		showSystemNotification(event);
	};
	(0, import_react.useEffect)(() => {
		const unlock = () => unlockReminderAudio();
		window.addEventListener("pointerdown", unlock, { once: true });
		return () => window.removeEventListener("pointerdown", unlock);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!remindersEnabled) return;
		const tick = () => {
			for (const plan of dueReminders(plans)) push(eventFromPlan(plan));
		};
		tick();
		const id = window.setInterval(tick, 4e3);
		return () => window.clearInterval(id);
	}, [
		plans,
		remindersEnabled,
		soundEnabled
	]);
	(0, import_react.useEffect)(() => {
		const onTest = () => {
			push({
				id: `test-${Date.now()}`,
				title: "Riyaziyyat dərsi",
				body: "10 dəqiqə sonra başlayır · Sinif 301"
			});
		};
		window.addEventListener(TEST_EVENT, onTest);
		return () => window.removeEventListener(TEST_EVENT, onTest);
	}, [soundEnabled]);
	const current = queue[0];
	(0, import_react.useEffect)(() => {
		if (!current) return;
		const id = window.setTimeout(() => {
			setQueue((q) => q.slice(1));
		}, 1e4);
		return () => window.clearTimeout(id);
	}, [current?.id]);
	if (!current) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-[max(0.75rem,env(safe-area-inset-top))]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "alert",
			className: "reminder-banner pointer-events-auto flex w-full max-w-lg items-start gap-3 rounded-[var(--radius-lg)] bg-primary px-4 py-3 text-primary-fg shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "mt-0.5 size-5 shrink-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold leading-tight",
						children: current.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-primary-fg/75",
						children: current.body
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Bağla",
					className: "shrink-0 rounded-full p-1 text-primary-fg/80 hover:text-primary-fg",
					onClick: () => setQueue((q) => q.slice(1)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})
			]
		})
	});
}
function SettingsScreen({ onBack, onPremium, onPrivacy }) {
	const service = useCedvel();
	const [name, setName] = (0, import_react.useState)(service.userName);
	const [newCat, setNewCat] = (0, import_react.useState)("");
	const [confirmClear, setConfirmClear] = (0, import_react.useState)(false);
	const saveName = () => {
		service.setUserName(name);
		toast.success("Ad saxlanıldı");
	};
	const addCat = () => {
		const res = service.addCategory(newCat);
		if (!res.ok) {
			if (res.reason === "limit") {
				toast.error("Pulsuz versiyada 4 kateqoriya limiti var");
				onPremium();
			} else toast.error(res.reason);
			return;
		}
		setNewCat("");
	};
	const exportData = (kind) => {
		if (!service.isPremium) {
			toast.error("İxrac Premium funksiyadır");
			onPremium();
			return;
		}
		const body = kind === "json" ? exportPlansJson(service.plans) : exportPlansCsv(service.plans);
		const blob = new Blob([body], { type: kind === "json" ? "application/json" : "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = kind === "json" ? "cedvel-planlar.json" : "cedvel-planlar.csv";
		a.click();
		URL.revokeObjectURL(url);
		navigator.clipboard.writeText(body).then(() => toast.success(kind === "json" ? "JSON yükləndi və kopyalandı" : "CSV yükləndi və kopyalandı"), () => toast.success("Fayl yükləndi"));
	};
	const themeLabel = {
		system: "Sistem",
		light: "Açıq",
		dark: "Qaranlıq"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		title: "Parametrlər",
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg space-y-6 px-5 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onPremium,
					className: "flex w-full items-center gap-3 rounded-[var(--radius-xl)] bg-primary px-5 py-4 text-left text-primary-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: service.isPremium ? "Premium aktivdir" : "Cədvəl Premium"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary-fg/70",
							children: service.isPremium ? "Bütün funksiyalar açıqdır" : "Limitsiz plan, ixrac və təkmil statistika"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Profil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "uname",
								children: "Ad"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "uname",
								className: "mt-1.5",
								value: name,
								placeholder: "Məsələn: Rəşad",
								onChange: (e) => setName(e.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: saveName,
							children: "Saxla"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Ümumi",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-sm text-muted",
							children: "Tema"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: [
								"system",
								"light",
								"dark"
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => service.setThemeMode(m),
								className: service.themeMode === m ? "h-10 flex-1 rounded-[var(--radius-md)] bg-primary text-sm font-medium text-primary-fg" : "h-10 flex-1 rounded-[var(--radius-md)] bg-bg text-sm text-muted",
								children: themeLabel[m]
							}, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4 text-muted" }), "Dil"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Azərbaycan"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Cədvəl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm text-muted",
						children: "Həftənin başlanğıcı"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: WEEKDAY_OPTIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => service.setWeekStartsOn(d.value),
							className: service.weekStartsOn === d.value ? "h-10 rounded-full bg-primary px-3 text-sm font-medium text-primary-fg" : "h-10 rounded-full bg-bg px-3 text-sm text-muted",
							children: d.label
						}, d.value))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Bildirişlər",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4 text-muted" }), "Dərs xəbərdarlığı"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: async () => {
									const next = !service.remindersEnabled;
									if (next) {
										if (!await requestNotifyPermission() && typeof Notification !== "undefined" && Notification.permission === "denied") toast.error("Brauzer bildirişə icazə vermir");
									}
									service.setRemindersEnabled(next);
								},
								className: service.remindersEnabled ? "h-8 rounded-full bg-primary px-3 text-xs font-medium text-primary-fg" : "h-8 rounded-full bg-bg px-3 text-xs font-medium text-muted",
								children: service.remindersEnabled ? "Açıq" : "Bağlı"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4 text-muted" }), "Səs"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => service.setSoundEnabled(!service.soundEnabled),
								className: service.soundEnabled ? "h-8 rounded-full bg-primary px-3 text-xs font-medium text-primary-fg" : "h-8 rounded-full bg-bg px-3 text-xs font-medium text-muted",
								children: service.soundEnabled ? "Açıq" : "Bağlı"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-subtle",
							children: "Xəbərdarlıq ekranın yuxarısında görünür və səs çıxır."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							className: "mt-3 w-full",
							onClick: () => {
								if (!service.remindersEnabled) {
									toast.error("Əvvəl xəbərdarlığı açın");
									return;
								}
								dispatchTestReminder();
							},
							children: "Bildirişi sına"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Kateqoriyalar",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-wrap gap-2",
							children: service.categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "inline-flex items-center gap-1 rounded-full bg-bg px-3 py-1.5 text-sm",
								children: [c, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-subtle hover:text-danger",
									onClick: () => service.removeCategory(c),
									"aria-label": `${c} sil`,
									children: "×"
								})]
							}, c))
						}),
						!service.isPremium ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-subtle",
							children: [
								"Pulsuz: ",
								service.categories.length,
								"/",
								4,
								" kateqoriya"
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: newCat,
								onChange: (e) => setNewCat(e.target.value),
								placeholder: "Yeni kateqoriya"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								onClick: addCat,
								children: "Əlavə"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Məlumat",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$1, {
							icon: Download,
							label: "JSON ixrac et",
							onClick: () => exportData("json")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$1, {
							icon: Download,
							label: "CSV ixrac et",
							onClick: () => exportData("csv")
						}),
						!confirmClear ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$1, {
							icon: Trash2,
							label: "Bütün planları sil",
							danger: true,
							onClick: () => setConfirmClear(true)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[var(--radius-md)] bg-bg p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "Bütün planlar silinəcək. Əminsiniz?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setConfirmClear(false),
									children: "Xeyr"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "destructive",
									size: "sm",
									onClick: () => {
										service.clearAllPlans();
										setConfirmClear(false);
										toast.success("Bütün planlar silindi");
									},
									children: "Bəli, sil"
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Hüquqi",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row$1, {
						icon: Shield,
						label: "Məxfilik Siyasəti",
						onClick: onPrivacy
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Haqqında",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Versiya" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "1.1.0"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4 text-muted" }), "Nibras Code"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "Developer"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "pt-2 text-center text-sm text-subtle",
					children: [
						"Cədvəl · Gününə nəzarət et",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Nibras Code"
					]
				})
			]
		})
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-[var(--radius-xl)] bg-surface p-4 shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-3 text-xs font-semibold uppercase tracking-wide text-muted",
			children: title
		}), children]
	});
}
function Row$1({ icon: Icon, label, onClick, danger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `flex w-full items-center justify-between py-2.5 text-left text-sm ${danger ? "text-danger" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-subtle" })]
	});
}
var FEATURES = [
	"Limitsiz plan və tapşırıq",
	"Limitsiz kateqoriya",
	"JSON və CSV ixrac",
	"Həftəlik qrafik və kateqoriya statistika"
];
function PremiumScreen({ onBack }) {
	const isPremium = useCedvel((s) => s.isPremium);
	const setPremium = useCedvel((s) => s.setPremium);
	const activate = () => {
		setPremium(true);
		toast.success("Premium aktivləşdirildi");
		onBack();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		title: "Cədvəl Premium",
		onBack,
		tone: "ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-6 pb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-semibold",
					children: "Sadə planlama. Güclü nəticə."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-primary-fg/70",
					children: [
						"Pulsuz versiya ",
						7,
						" plan və ",
						4,
						" kateqoriya ilə işləyir. Premium limiti götürür."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden rounded-[var(--radius-xl)] bg-white/8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "text-primary-fg/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 text-left font-medium",
									children: " "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3 font-medium",
									children: "Pulsuz"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3 font-medium",
									children: "Premium"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, {
									label: "Plan sayı",
									free: `7`,
									pro: "Limitsiz"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, {
									label: "Kateqoriya",
									free: `4`,
									pro: "Limitsiz"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, {
									label: "JSON / CSV ixrac",
									free: "—",
									pro: "Var"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, {
									label: "Təkmil statistika",
									free: "Əsas",
									pro: "Tam"
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-2.5",
					children: FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-success" }), f]
					}, f))
				}),
				isPremium ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-[var(--radius-lg)] border border-success/40 bg-success/15 px-4 py-3 text-center text-sm font-medium",
					children: "Premium aktivdir"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
							title: "Aylıq",
							price: "2.99 ₼",
							onClick: activate
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {
							title: "İllik",
							price: "19.99 ₼",
							badge: "Populyar",
							onClick: activate
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-primary-fg/50",
						children: "Ödəniş sistemi tezliklə qoşulacaq. İndi Premium lokal aktivləşir — heç bir məbləğ tutulmur."
					})]
				})
			]
		})
	});
}
function Cmp({ label, free, pro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "border-t border-white/10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-4 py-2.5 text-left text-primary-fg/80",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-2.5 text-primary-fg/55",
				children: free
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "px-3 py-2.5 font-semibold",
				children: pro
			})
		]
	});
}
function Price({ title, price, badge, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "relative rounded-[var(--radius-lg)] border border-white/15 bg-white/8 px-3 py-4 text-center",
		children: [
			badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-primary-fg px-2 py-0.5 text-[10px] font-semibold text-primary",
				children: badge
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-primary-fg/70",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-xl font-semibold",
				children: price
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block text-xs font-medium",
				children: "Aktivləşdir"
			})
		]
	});
}
function PrivacyScreen({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		title: "Məxfilik Siyasəti",
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5 pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyArticle, {})
		})
	});
}
function SearchScreen({ onBack, onOpen, onEdit }) {
	const plans = useCedvel((s) => s.plans);
	const [q, setQ] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		if (!query) return [];
		return plans.filter((p) => {
			return p.title.toLowerCase().includes(query) || (p.subtitle?.toLowerCase().includes(query) ?? false) || (p.location?.toLowerCase().includes(query) ?? false) || (p.note?.toLowerCase().includes(query) ?? false) || p.category.toLowerCase().includes(query);
		});
	}, [plans, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		title: "Axtarış",
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-5 pb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Plan, dərs, kateqoriya və ya məkan",
				autoFocus: true
			}), q.trim() === "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-center text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "size-12 text-subtle",
					strokeWidth: 1.4
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Axtarış etmək üçün yazın"
				})]
			}) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-center text-muted",
				children: "Nəticə tapılmadı"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCard, {
					plan: p,
					showDate: true,
					onOpen: () => onOpen(p),
					onEdit: () => onEdit(p)
				}) }, p.id))
			})]
		})
	});
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2 text-sm text-fg shadow-card placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var TYPES = [
	"lesson",
	"task",
	"event",
	"note"
];
function PlanForm({ plan, preset, onBack, onNeedPremium }) {
	const categories = useCedvel((s) => s.categories);
	const addPlan = useCedvel((s) => s.addPlan);
	const updatePlan = useCedvel((s) => s.updatePlan);
	const isPremium = useCedvel((s) => s.isPremium);
	const plans = useCedvel((s) => s.plans);
	const editing = Boolean(plan);
	const defaults = defaultStartEnd();
	const [title, setTitle] = (0, import_react.useState)(plan?.title ?? "");
	const [subtitle, setSubtitle] = (0, import_react.useState)(plan?.subtitle ?? "");
	const [location, setLocation] = (0, import_react.useState)(plan?.location ?? "");
	const [note, setNote] = (0, import_react.useState)(plan?.note ?? "");
	const [type, setType] = (0, import_react.useState)(plan?.type ?? "lesson");
	const [category, setCategory] = (0, import_react.useState)(plan?.category ?? categories[0] ?? "Dərs");
	const [color, setColor] = (0, import_react.useState)(plan?.color ?? "plan-1");
	const [start, setStart] = (0, import_react.useState)(toLocalInput(plan ? new Date(plan.startTime) : preset?.start ?? defaults.start));
	const [end, setEnd] = (0, import_react.useState)(toLocalInput(plan ? new Date(plan.endTime) : preset?.end ?? defaults.end));
	const [reminderOffsetMin, setReminderOffsetMin] = (0, import_react.useState)(plan ? plan.reminderOffsetMin ?? null : 10);
	const save = () => {
		if (!title.trim()) {
			toast.error("Başlıq daxil edin");
			return;
		}
		const startDate = fromLocalInput(start);
		let endDate = fromLocalInput(end);
		if (endDate <= startDate) endDate = new Date(startDate.getTime() + 36e5);
		if (!editing && !canAddPlan({
			isPremium,
			plans
		})) {
			toast.error("Pulsuz limit dolub. Premium-a keçin.");
			onNeedPremium();
			return;
		}
		const payload = {
			title: title.trim(),
			subtitle: subtitle.trim() || void 0,
			location: location.trim() || void 0,
			note: note.trim() || void 0,
			type,
			category,
			color,
			startTime: startDate.toISOString(),
			endTime: endDate.toISOString(),
			isCompleted: plan?.isCompleted ?? false,
			reminderOffsetMin
		};
		if (editing && plan) {
			updatePlan({
				...payload,
				id: plan.id
			});
			toast.success("Plan yeniləndi");
		} else {
			if (!addPlan(payload)) {
				onNeedPremium();
				return;
			}
			toast.success("Plan əlavə olundu");
		}
		if (reminderOffsetMin != null) requestNotifyPermission();
		onBack();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		title: editing ? "Planı redaktə et" : "Yeni plan",
		onBack,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			onClick: save,
			className: "text-primary",
			children: "Saxla"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mx-auto flex max-w-lg flex-col gap-5 px-5 pb-10",
			onSubmit: (e) => {
				e.preventDefault();
				save();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Başlıq *",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: title,
						onChange: (e) => setTitle(e.target.value),
						placeholder: "Məsələn: Hesab dərsi"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Alt başlıq",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: subtitle,
						onChange: (e) => setSubtitle(e.target.value),
						placeholder: "Məsələn: Riyaziyyat"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Məkan",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: location,
						onChange: (e) => setLocation(e.target.value),
						placeholder: "Sinif 301"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Başlama",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "datetime-local",
							value: start,
							onChange: (e) => setStart(e.target.value)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Bitmə",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "datetime-local",
							value: end,
							onChange: (e) => setEnd(e.target.value)
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Növ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setType(t);
								const label = PLAN_TYPE_LABEL[t];
								if (categories.includes(label)) setCategory(label);
								if (t === "lesson" && reminderOffsetMin == null) setReminderOffsetMin(10);
							},
							className: cn("h-10 rounded-full px-3.5 text-sm font-medium", type === t ? "bg-primary text-primary-fg" : "bg-surface text-muted shadow-card"),
							children: PLAN_TYPE_LABEL[t]
						}, t))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
					label: type === "lesson" ? "Dərs xəbərdarlığı" : "Xəbərdarlıq",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: reminderOffsetMin === null ? "none" : String(reminderOffsetMin),
						onChange: (e) => {
							const v = e.target.value;
							setReminderOffsetMin(v === "none" ? null : Number(v));
						},
						className: "h-11 w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 text-sm shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35",
						children: REMINDER_OFFSETS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: o.min === null ? "none" : String(o.min),
							children: o.label
						}, String(o.min)))
					}), type === "lesson" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Vaxtı çatanda ekranın yuxarısında səsli bildiriş görünür."
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Kateqoriya",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: category,
						onChange: (e) => setCategory(e.target.value),
						className: "h-11 w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 text-sm shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35",
						children: [categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c
						}, c)), plan && !categories.includes(plan.category) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: plan.category,
							children: plan.category
						}) : null]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Rəng",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2.5",
						children: PLAN_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": c.label,
							onClick: () => setColor(c.id),
							className: cn("size-9 rounded-full", `plan-dot-${c.id}`, color === c.id && "ring-2 ring-fg ring-offset-2 ring-offset-bg")
						}, c.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Qeyd",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: note,
						onChange: (e) => setNote(e.target.value),
						rows: 3
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "h-12",
					children: editing ? "Dəyişiklikləri saxla" : "Planı saxla"
				})
			]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function PlanDetail({ plan, onBack, onEdit }) {
	const deletePlan = useCedvel((s) => s.deletePlan);
	const toggleComplete = useCedvel((s) => s.toggleComplete);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
		title: "Plan təfərrüatı",
		onBack,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			onClick: onEdit,
			children: "Redaktə"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-5 pb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("rounded-[var(--radius-xl)] border bg-surface p-5", `plan-ring-${plan.color}`),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-medium text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2.5 rounded-full", `plan-dot-${plan.color}`) }),
								PLAN_TYPE_LABEL[plan.type],
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								plan.category
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: cn("mt-3 font-display text-2xl font-semibold", plan.isCompleted && "text-muted line-through"),
							children: plan.title
						}),
						plan.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: plan.subtitle
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: CalendarDays,
							label: "Tarix",
							value: formatDayMonthYear(new Date(plan.startTime))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: Clock3,
							label: "Vaxt",
							value: `${formatTime(new Date(plan.startTime))} – ${formatTime(new Date(plan.endTime))}`
						}),
						plan.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: MapPin,
							label: "Məkan",
							value: plan.location
						}) : null,
						plan.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: NotebookPen,
							label: "Qeyd",
							value: plan.note
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: Bell,
							label: "Xəbərdarlıq",
							value: REMINDER_OFFSETS.find((o) => o.min === (plan.reminderOffsetMin ?? null))?.label ?? "Xəbərdarlıq yoxdur"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: plan.isCompleted ? CircleCheck : Circle,
							label: "Status",
							value: plan.isCompleted ? "Tamamlanıb" : "Gözləyir"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "h-12 text-danger",
						onClick: () => {
							deletePlan(plan.id);
							onBack();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Sil"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "h-12",
						onClick: () => {
							toggleComplete(plan.id);
							onBack();
						},
						children: plan.isCompleted ? "Geri al" : "Tamamla"
					})]
				})
			]
		})
	});
}
function Row({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mt-0.5 size-5 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-[15px] font-medium",
			children: value
		})] })]
	});
}
function CedvelApp() {
	const onboardingDone = useCedvel((s) => s.onboardingDone);
	const plans = useCedvel((s) => s.plans);
	const isPremium = useCedvel((s) => s.isPremium);
	const [tab, setTab] = (0, import_react.useState)("home");
	const [view, setView] = (0, import_react.useState)({ name: "main" });
	const [booted, setBooted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const unsub = useCedvel.persist.onFinishHydration(() => setBooted(true));
		if (useCedvel.persist.hasHydrated()) setBooted(true);
		else useCedvel.persist.rehydrate();
		return unsub;
	}, []);
	if (!booted && onboardingDone) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col items-center justify-center bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl font-semibold text-primary",
			children: "Cədvəl"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Gününə nəzarət et"
		})]
	});
	if (!onboardingDone) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSync, {}), view.name === "privacy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyScreen, { onBack: () => setView({ name: "main" }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, { onPrivacy: () => setView({ name: "privacy" }) })] });
	const openAdd = (range) => {
		if (!canAddPlan({
			isPremium,
			plans
		})) {
			setView({ name: "premium" });
			return;
		}
		if (range) {
			setView({
				name: "form",
				start: range.start.toISOString(),
				end: range.end.toISOString()
			});
			return;
		}
		setView({ name: "form" });
	};
	const planById = (id) => plans.find((p) => p.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSync, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "bottom-center",
			richColors: true,
			closeButton: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReminderHost, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
			tab,
			onTab: setTab,
			onAdd: openAdd,
			children: [
				tab === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {
					onSearch: () => setView({ name: "search" }),
					onSettings: () => setView({ name: "settings" }),
					onPremium: () => setView({ name: "premium" }),
					onAdd: openAdd,
					onOpen: (p) => setView({
						name: "detail",
						planId: p.id
					}),
					onEdit: (p) => setView({
						name: "form",
						planId: p.id
					})
				}) : null,
				tab === "week" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeeklyScreen, {
					onOpen: (p) => setView({
						name: "detail",
						planId: p.id
					}),
					onEdit: (p) => setView({
						name: "form",
						planId: p.id
					})
				}) : null,
				tab === "tasks" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TasksScreen, {
					onOpen: (p) => setView({
						name: "detail",
						planId: p.id
					}),
					onEdit: (p) => setView({
						name: "form",
						planId: p.id
					})
				}) : null,
				tab === "stats" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsScreen, { onPremium: () => setView({ name: "premium" }) }) : null
			]
		}),
		view.name === "search" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchScreen, {
			onBack: () => setView({ name: "main" }),
			onOpen: (p) => setView({
				name: "detail",
				planId: p.id
			}),
			onEdit: (p) => setView({
				name: "form",
				planId: p.id
			})
		}) : null,
		view.name === "settings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsScreen, {
			onBack: () => setView({ name: "main" }),
			onPremium: () => setView({ name: "premium" }),
			onPrivacy: () => setView({ name: "privacy" })
		}) : null,
		view.name === "premium" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PremiumScreen, { onBack: () => setView({ name: "main" }) }) : null,
		view.name === "privacy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyScreen, { onBack: () => setView({ name: "settings" }) }) : null,
		view.name === "form" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanForm, {
			plan: view.planId ? planById(view.planId) : void 0,
			preset: view.start && view.end ? {
				start: new Date(view.start),
				end: new Date(view.end)
			} : void 0,
			onBack: () => setView(view.planId ? {
				name: "detail",
				planId: view.planId
			} : { name: "main" }),
			onNeedPremium: () => setView({ name: "premium" })
		}) : null,
		view.name === "detail" ? (() => {
			const plan = planById(view.planId);
			if (!plan) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanDetail, {
				plan,
				onBack: () => setView({ name: "main" }),
				onEdit: () => setView({
					name: "form",
					planId: plan.id
				})
			});
		})() : null
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CedvelApp, {});
}
//#endregion
export { Home as component };
