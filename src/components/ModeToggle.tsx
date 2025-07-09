import { Button } from '@/components/ui/button'
import { useTheme } from "@/hooks/useTheme.ts";
import {IconBrightness } from "@tabler/icons-react";

export const ModeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant="secondary" size="icon" className="group/toggle size-8" onClick={toggleTheme}>
            <IconBrightness size={16} color={theme === 'light'? 'gray' : 'white'} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}