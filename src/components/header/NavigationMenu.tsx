import { AnimatePresence, motion } from "framer-motion";
import { NavigationItem } from "./NavigationItem";
import { MenuFooter } from "./MenuFooter";

interface NavigationMenuProps {
    isOpen: boolean;
    navigationItems: Array<{ name: string; href: string }>;
    onClose: () => void;
}

export function NavigationMenu({ isOpen, navigationItems, onClose }: NavigationMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed inset-0 z-30 bg-white"
                >
                    <div className="flex h-full flex-col">
                        {/* Spacer for header */}
                        <div className="h-14 sm:h-16 lg:h-20" />

                        {/* Navigation Items */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-1 flex-col items-center justify-start px-4 pt-8 sm:px-6 sm:pt-12 lg:pt-16"
                        >
                            <nav className="w-full max-w-4xl">
                                <ul className="space-y-4 sm:space-y-6 lg:space-y-8">
                                    {navigationItems.map((item, index) => (
                                        <NavigationItem
                                            key={index}
                                            item={item}
                                            index={index}
                                            onClose={onClose}
                                        />
                                    ))}
                                </ul>
                            </nav>
                        </motion.div>

                        <MenuFooter onClose={onClose} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}