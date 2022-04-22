import { useEffect, useCallback } from "react"

export function useTitle(title?: string, options?: { prefix: boolean }): void

export function useTitle(title: string, options = { prefix: true }) {
    const getMainTitle: () => string|boolean = useCallback(() => {
        const metaTag: HTMLMetaElement = document.querySelector("meta[name='use-title-prefix']")

        if (metaTag) {
            const metaTitle = metaTag.getAttribute("content")

            if (metaTitle) {
                return metaTitle
            }
        }

        return false
    }, [])

    useEffect(() => {
        const prev = document.title

        const mainTitle = getMainTitle()

        if (title) {
            if (title != prev) {
                if (mainTitle) {
                    if (options.prefix) {
                        document.title = `${title} - ${mainTitle}`
                    } else {
                        document.title = title
                    }
                } else {
                    document.title = title
                }
            }
        } else {
            if (mainTitle && typeof mainTitle == "string") {
                document.title = mainTitle
            }
        }

        return () => {
            document.title = prev
        }
    }, [title, options.prefix, getMainTitle])
}